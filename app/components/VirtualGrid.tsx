"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import tw from "twin.macro";

interface VirtualGridProps {
  items: any[];
  itemWidth: number;
  itemHeight: number;
  containerWidth: number;
  containerHeight: number;
  renderItem: (item: any, index: number) => React.ReactNode;
  overscan?: number;
  gap?: number;
}

const VirtualGrid: React.FC<VirtualGridProps> = ({
  items,
  itemWidth,
  itemHeight,
  containerWidth,
  containerHeight,
  renderItem,
  overscan = 2,
  gap = 16,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate grid layout
  const itemsPerRow = Math.floor((containerWidth + gap) / (itemWidth + gap));
  const totalRows = Math.ceil(items.length / itemsPerRow);
  const rowHeight = itemHeight + gap;

  // Calculate visible range
  const startRow = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  const endRow = Math.min(
    totalRows - 1,
    Math.ceil((scrollTop + containerHeight) / rowHeight) + overscan
  );

  // Calculate visible items
  const startIndex = startRow * itemsPerRow;
  const endIndex = Math.min(items.length - 1, (endRow + 1) * itemsPerRow - 1);
  const visibleItems = items.slice(startIndex, endIndex + 1);

  // Calculate total height and offset
  const totalHeight = totalRows * rowHeight;
  const offsetY = startRow * rowHeight;

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  // Auto-scroll to top when items change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
      setScrollTop(0);
    }
  }, [items.length]);

  // Memoize the grid container styles
  const gridContainerStyle = useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: `repeat(${itemsPerRow}, ${itemWidth}px)`,
      gap: `${gap}px`,
      width: "100%",
    }),
    [itemsPerRow, itemWidth, gap]
  );

  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight,
        overflow: "auto",
        position: "relative",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: offsetY,
            left: 0,
            right: 0,
            ...gridContainerStyle,
          }}
        >
          {visibleItems.map((item, index) => {
            const actualIndex = startIndex + index;
            return (
              <div key={`${actualIndex}-${item.title || item.id || index}`}>
                {renderItem(item, actualIndex)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VirtualGrid;
