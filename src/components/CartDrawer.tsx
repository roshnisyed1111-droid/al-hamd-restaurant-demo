import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, Phone, ShoppingBag, AlertCircle } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<'Dine-in' | 'Takeout'>('Takeout');

  if (!isOpen) return null;

  const totalAmount = items.reduce((sum, item) => sum + (item.item.price * item.quantity), 0);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#231E1B]/50 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl border-l border-[#EAE4DA] flex flex-col justify-between animate-slideInRight">
          
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#EAE4DA] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#231E1B] text-white flex items-center justify-center shadow-xs">
                <ShoppingBag className="w-5 h-5 text-[#E8927C]" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-[#231E1B]">
                  Your Order Tray
                </h3>
                <p className="text-xs text-[#786E64]">
                  {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#786E64] hover:text-[#231E1B] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            
            {/* Dine-in vs Takeout Switch */}
            <div className="bg-[#EAE4DA]/60 p-1 rounded-xl flex">
              <button
                onClick={() => setOrderType('Takeout')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  orderType === 'Takeout'
                    ? 'bg-white text-[#231E1B] shadow-xs'
                    : 'text-[#665E55] hover:text-[#231E1B]'
                }`}
              >
                Takeout / Parcel
              </button>
              <button
                onClick={() => setOrderType('Dine-in')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  orderType === 'Dine-in'
                    ? 'bg-white text-[#231E1B] shadow-xs'
                    : 'text-[#665E55] hover:text-[#231E1B]'
                }`}
              >
                Dine-in Table
              </button>
            </div>

            {/* Empty State */}
            {items.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white border border-[#EAE4DA] flex items-center justify-center text-[#8C8276] mb-4 shadow-xs">
                  <ShoppingBag className="w-8 h-8 text-[#BF432F]" />
                </div>
                <h4 className="text-base font-bold text-[#231E1B]">Your tray is empty</h4>
                <p className="text-xs text-[#786E64] mt-1 max-w-[220px]">
                  Explore the menu to add delicious chicken karahi, BBQ, or shahi daal.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-5 py-2.5 rounded-xl bg-[#BF432F] text-white text-xs font-bold hover:bg-[#A63725] transition-colors shadow-xs cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-white rounded-xl border border-[#EAE4DA] shadow-xs flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-[#231E1B] truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#BF432F] font-bold mt-0.5">
                        PKR {(item.price * quantity).toLocaleString()}
                        <span className="text-[10px] text-[#8C8276] font-normal ml-1">
                          (PKR {item.price.toLocaleString()} each)
                        </span>
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center space-x-1 bg-[#FAF7F2] rounded-lg p-1 border border-[#EAE4DA]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-[#574E46] hover:bg-white transition-colors cursor-pointer"
                        title="Decrease"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold text-[#231E1B] w-6 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-[#574E46] hover:bg-white transition-colors cursor-pointer"
                        title="Increase"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#9E9385] hover:text-[#DC2626] p-1.5 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <div className="flex justify-end pt-1">
                  <button
                    onClick={onClearCart}
                    className="text-xs text-[#8C8276] hover:text-[#DC2626] font-medium underline cursor-pointer"
                  >
                    Clear all items
                  </button>
                </div>
              </div>
            )}

            {/* Order Note Disclaimer Box */}
            <div className="p-3.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-[#CA7826] flex-shrink-0 mt-0.5" />
              <div className="text-[11px] text-[#92400E] leading-relaxed">
                <strong>Al-Hamd Order Tray:</strong> Al-Hamd Restaurant prepares orders freshly in Larkana. Call directly at <strong>{RESTAURANT_INFO.phoneDisplay}</strong> to confirm your dine-in table or takeout order!
              </div>
            </div>

          </div>

          {/* Footer & Direct Call Action */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#EAE4DA] space-y-4">
              <div className="space-y-1.5 text-xs text-[#665E55]">
                <div className="flex justify-between">
                  <span>Selected Items ({totalItemCount}):</span>
                  <span>PKR {totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Order Type:</span>
                  <span className="font-semibold text-[#231E1B]">{orderType}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-[#231E1B] pt-2 border-t border-[#F2ECE1]">
                  <span>Estimated Total:</span>
                  <span className="text-[#BF432F]">PKR {totalAmount.toLocaleString()}</span>
                </div>
              </div>

              {/* Call to Order CTA */}
              <a
                id="cart-call-to-order-btn"
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full py-3.5 px-4 bg-[#BF432F] hover:bg-[#A63725] text-white rounded-xl font-bold text-sm shadow-sm flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call {RESTAURANT_INFO.phoneDisplay} to Order</span>
              </a>

              <p className="text-center text-[10px] text-[#8C8276]">
                Al-Hamd Restaurant & Bar B.Q. • G.T Road, Larkana, Sindh
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
