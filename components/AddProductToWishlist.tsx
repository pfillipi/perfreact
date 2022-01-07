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
      Vil du legge til ønskeliste?
      <button onClick={onAddToWishlist}>Ja</button>
      <button onClick={onRequestClose}>Nei</button>
    </span>
  );
}
