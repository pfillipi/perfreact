interface AddProductToWishlistProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishlist({
  onAddToWishlist,
  onRequestClose,
}: AddProductToWishlistProps) {
  return (
    <span>
      Vil du legge til favoritter?
      <button onClick={onAddToWishlist}>Ja</button>
      <button onClick={onRequestClose}>Nei</button>
    </span>
  );
}
