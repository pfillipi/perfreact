import { List, ListRowRenderer } from "react-virtualized";
import { ProductItem } from "./ProductItem";
interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={25}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}

/** 
  * 1. Lag en ny versjon av komponenten;
  * 2. Sammenlign med den fremre versjonen;
  * 3. Hvis det er endringer, oppdater dem.

*/

/**
 * Apply memo in the following situations:
 * 1. Pure Functional Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */

/**
 * useMemo / useCallback
 *
 * 1. tunge beregninger
 * 2. referansemessing likestilling – når du sender denne informasjonen til den underordnede komponenten
 *
 * 3.
 */
