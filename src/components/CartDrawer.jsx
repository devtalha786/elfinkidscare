'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, Trash2, Minus, Plus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToCart,
	removeFromCart,
	decreaseCartQuantity,
} from '@/store/cart/cartThunk';

export default function CartDrawer({ open, onClose }) {
	const dispatch = useDispatch();
	const items = useSelector(s => s.cart.cartItems);

	const subtotal = items.reduce(
		(sum, i) => sum + Number(i.price) * (i.quantity ?? 1),
		0
	);

	// lock body scroll while open
	useEffect(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		// document.body.style.overflow = 'hidden';
		return () => {
			// document.body.style.overflow = prev;
		};
	}, [open]);

	return (
		<>
			{/* Overlay */}
			<div
				className={`fixed inset-0 z-[70] bg-black/50 transition-opacity duration-300 ${
					open
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}
				onClick={onClose}
			/>

			{/* Panel */}
			<aside
				className={`fixed right-0 top-0 z-[80] h-full w-full md:max-w-[420px] bg-white shadow-2xl
        transition-transform duration-300 ${
			open ? 'translate-x-0' : 'translate-x-full'
		}
        flex flex-col min-h-0 overscroll-contain`}
				aria-hidden={!open}
			>
				{/* Header */}
				<div className='bg-[#F3EAFF] text-[#121212]'>
					<div className='flex items-center justify-between px-5 py-4'>
						<h3 className='text-lg font-semibold'>Your cart</h3>
						<button
							aria-label='Close'
							onClick={onClose}
							className='rounded-full p-1 hover:bg-black/5'
						>
							<X className='size-5' />
						</button>
					</div>
				</div>

				{/* Content (column + shrink) */}
				<div className='flex-1 min-h-0 flex flex-col'>
					{items.length > 0 ? (
						<>
							{/* Scrollable list (fills remaining space) */}
							<div className='flex-1 overflow-y-scroll px-4 py-4 space-y-4'>
								{items.map(item => (
									<div
										key={item.id}
										className='flex gap-3 border rounded-lg p-3'
									>
										<div className='shrink-0'>
											<div className='relative w-[72px] h-[72px] rounded-md overflow-hidden bg-neutral-100'>
												<Image
													src={
														item.frontImage ||
														item.image ||
														'/images/frontImage.webp'
													}
													alt={item.name}
													fill
													className='object-contain'
												/>
											</div>
										</div>

										<div className='flex-1 min-w-0'>
											<div className='flex items-start justify-between gap-2'>
												<div className='min-w-0'>
													<p className='truncate text-sm font-medium text-neutral-900'>
														{item.name}
													</p>
													{item.size ? (
														<p className='text-xs text-neutral-500 mt-0.5'>
															Size: {item.size}
														</p>
													) : null}
												</div>
												<p className='text-sm font-semibold'>
													$
													{Number(item.price).toFixed(
														2
													)}
												</p>
											</div>

											<div className='mt-3 flex items-center justify-between'>
												{/* Qty controls */}
												<div className='inline-flex items-center gap-3'>
													<button
														className='inline-flex h-8 w-8 items-center justify-center rounded-md border hover:bg-neutral-50'
														onClick={() =>
															dispatch(
																decreaseCartQuantity(
																	item.id
																)
															)
														}
														aria-label='Decrease quantity'
													>
														<Minus className='size-4' />
													</button>
													<span className='w-6 text-center text-sm font-medium'>
														{item.quantity ?? 1}
													</span>
													<button
														className='inline-flex h-8 w-8 items-center justify-center rounded-md border hover:bg-neutral-50'
														onClick={() =>
															dispatch(
																addToCart(item)
															)
														}
														aria-label='Increase quantity'
													>
														<Plus className='size-4' />
													</button>
												</div>

												<button
													className='inline-flex items-center gap-1 text-neutral-500 hover:text-red-600'
													onClick={() =>
														dispatch(
															removeFromCart(
																item.id
															)
														)
													}
												>
													<Trash2 className='size-4' />
													<span className='text-sm'>
														Remove
													</span>
												</button>
											</div>
										</div>
									</div>
								))}
							</div>

							{/* Footer (always visible) */}
							<div className='border-t bg-white px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]'>
								{/* Free shipping banner */}
								<div className='rounded-xl border bg-[#FFF7FD] px-4 py-3'>
									<p className='text-sm'>
										<span className='mr-2'>🚚</span>
										<span className='font-medium'>
											Free Shipping
										</span>{' '}
										on Orders{' '}
										<span className='font-semibold'>
											$25+
										</span>
									</p>
								</div>
								<div className='mb-2 text-sm text-neutral-500'>
									Taxes, discounts and shipping calculated at
									checkout.
								</div>

								<div className='flex items-center justify-between mb-3'>
									<span className='font-medium text-neutral-800'>
										Estimated total
									</span>
									<span className='text-lg font-semibold'>
										${subtotal.toFixed(2)} USD
									</span>
								</div>

								<button className='w-full h-12 rounded-full bg-[#532C7F] text-white font-medium hover:opacity-95 transition'>
									Check out
								</button>
							</div>
						</>
					) : (
						// Empty state
						<div className='flex-1 flex flex-col items-center justify-center px-6 text-center'>
							<h4 className='text-xl font-semibold text-neutral-900'>
								Your cart is empty
							</h4>

							<button
								onClick={onClose}
								className='mt-6 rounded-md bg-black px-5 py-2.5 text-white text-sm font-medium hover:bg-black/85'
							>
								Continue shopping
							</button>
						</div>
					)}
				</div>
			</aside>
		</>
	);
}
