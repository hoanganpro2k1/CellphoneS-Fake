import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Icons } from './Icons';
import NavItems from './NavItems';
import Search from './Search';
import { Button } from './ui/button';
import { Phone, ShoppingBag, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';
import LoginButton from './LoginButton';
import { ROUTES } from '@/config/route';

const Navbar = () => {
	return (
		<div className="bg-navbar h-16 sticky z-50 top-0 inset-0">
			<header className="relative">
				<MaxWidthWrapper>
					<div className="flex h-16 items-center">
						<div className="border border-gray-200 ml-4 flex lg:ml-0">
							<Link href={'/'}>
								<Icons.logo className="h-10 w-10" />
							</Link>
						</div>

						<div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
							<NavItems />
						</div>

						<div className="flex px-4 items-center w-80">
							<Search />
						</div>

						<div className="gap-2 flex flex-initial items-center">
							<div className="relative flex items-center">
								<a href="tel: 0983439381">
									<Button
										className="gap-1 font-normal text-xs text-white bg-transparent hover:bg-bgNavbar hover:text-white"
										variant={'secondary'}
									>
										<Phone
											strokeWidth={1.5}
											className={cn(
												'h-6 w-6 transition-all text-muted-foreground text-white',
											)}
										/>
										Gọi mua hàng <br />
										0983439381
									</Button>
								</a>
							</div>
							<div className="relative flex items-center">
								<Link href={ROUTES.TRA_CUU_DON_HANG}>
									<Button
										className="gap-1 font-normal text-xs text-white bg-transparent hover:bg-bgNavbar hover:text-white"
										variant={'secondary'}
									>
										<Truck
											strokeWidth={1.5}
											className={cn(
												'h-6 w-6 transition-all text-muted-foreground text-white scale-x-[-1]',
											)}
										/>
										Tra cứu <br /> đơn hàng
									</Button>
								</Link>
							</div>
							<div className="relative flex items-center">
								<Link href={ROUTES.CART}>
									<Button
										className="gap-1 font-normal text-xs text-white bg-transparent hover:bg-bgNavbar hover:text-white"
										variant={'secondary'}
									>
										<ShoppingBag
											strokeWidth={1.5}
											className={cn(
												'h-6 w-6 transition-all text-muted-foreground text-white scale-x-[-1]',
											)}
										/>
										Giỏ hàng
									</Button>
								</Link>
							</div>
							<div className="relative text-xs flex items-center">
								<LoginButton />
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</header>
		</div>
	);
};

export default Navbar;
