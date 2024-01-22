import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Icons } from './Icons';
import NavItems from './NavItems';
import Search from './Search';

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

						<div className="mx-auto flex items-center w-[300px]">
							<Search />
						</div>

						<div className="ml-auto flex items-center">
							<NavItems />
						</div>
					</div>
				</MaxWidthWrapper>
			</header>
		</div>
	);
};

export default Navbar;
