'use client';

import { CircleUserRound } from 'lucide-react';
import { Button } from './ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ROUTES } from '@/config/route';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginButton = () => {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	return (
		<Dialog onOpenChange={setOpen} open={open}>
			<DialogTrigger asChild>
				<Button
					className="gap-1 font-normal text-sm text-white bg-bgNavbar hover:bg-bgNavbar hover:text-white"
					variant={'secondary'}
					onClick={() => setOpen(true)}
				>
					<CircleUserRound
						strokeWidth={1.5}
						className={cn(
							'h-6 w-6 transition-all text-muted-foreground text-white',
						)}
					/>
					Đăng nhập
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="text-3xl text-center font-bold text-navbar">
						Smember
					</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4 justify-items-center">
					<Image
						width={46}
						height={80}
						src="/chibi2.webp"
						alt="product category image"
						className="object-center"
					/>
					<span className="text-base font-bold text-center text-gray-700">
						Vui lòng đăng nhập tài khoản Smember để xem ưu đãi và thanh toán dễ
						dàng hơn.
					</span>
				</div>
				<DialogFooter className="grid grid-cols-2">
					<Button
						variant="outline"
						type="submit"
						className="border-2 border-[#dd2440] py-6 text-base"
						onClick={() => {
							router.push(ROUTES.SIGN_UP);
							setOpen(false);
						}}
					>
						Đăng kí
					</Button>
					<Button
						className="py-6 text-base"
						variant={'destructive'}
						type="submit"
						onClick={() => {
							router.push(ROUTES.SIGN_IN);
							setOpen(false);
						}}
					>
						Đăng nhập
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default LoginButton;
