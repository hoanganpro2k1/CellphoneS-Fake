import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

const SearchInput = () => {
	return (
		<div className="relative w-full">
			<Search className="absolute top-2 left-2 w-6 h-6 text-muted-foreground" />
			<Input
				className={cn('pl-10', {
					'focus-visible:ring-red-500': true,
				})}
				placeholder="Bạn cần tìm gì?"
			/>
		</div>
	);
};

export default SearchInput;
