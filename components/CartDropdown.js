import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const CartDropdown = ({ cartItems, onAdd, onRemove, total, onCheckout = () => {}, note }) => {
  return (
    <div className="fixed right-4 top-20 z-50 w-full max-w-sm rounded-2xl border border-slate-200 bg-white shadow-xl">
      {cartItems.length > 0 ? (
        <div className="space-y-4 p-4">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                  <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">
                    ${item.price}.00 x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-200 px-2 py-1">
                  <button
                    className="text-slate-600 hover:text-slate-900"
                    onClick={() => onRemove(item)}
                    aria-label="Decrease quantity"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="text-sm font-semibold">{item.quantity}</span>
                  <button
                    className="text-slate-600 hover:text-slate-900"
                    onClick={() => onAdd(item)}
                    aria-label="Increase quantity"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-200 pt-4 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Estimated shipping</span>
              <span>Free</span>
            </div>
            <div className="mt-2 flex justify-between text-base font-semibold text-slate-900">
              <span>Total</span>
              <span>${total}.00</span>
            </div>
            <button
              type="button"
              onClick={onCheckout}
              className="mt-4 w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            >
              Checkout
            </button>
            {note && <div className="mt-3">{note}</div>}
          </div>
        </div>
      ) : (
        <p className="p-4 text-sm text-slate-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartDropdown;
