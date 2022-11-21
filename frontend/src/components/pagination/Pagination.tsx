import { clsx } from 'clsx';
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'
export interface PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    }

    const classes = {
        base: clsx(
            'rounded-full h-[28px] w-[28px] flex items-center justify-center cursor-pointer',
        ),
        enabled: clsx(
            'bg-slate-100 text-slate-400 hover:text-slate-700 hover:bg-slate-200',
        ),
        disabled: clsx(
            'bg-gray-100 text-gray-300 cursor-not-allowed',
        ),
        selected: clsx(
            'border-slate-200 text-slate-800 bg-slate-300 ring-slate-200 border-[2px] cursor-not-allowed',
        ),
    }

    const firstPageShowed = page - 2 < 1 ? 1 : page - 2;
    const lastPageShowed = firstPageShowed + 4;

    const pageButtons = Array.from(
        { length: lastPageShowed - firstPageShowed + 1 }, (_, i) => {
            const pageNumber = firstPageShowed + i;
            return (
                <div className={
                    clsx(
                        classes.base,
                        `${pageNumber === page ? clsx(classes.selected) : ''}`,
                        `${pageNumber <= totalPages ? clsx(classes.enabled) : clsx(classes.disabled)}`,
                    )}
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                >
                    {pageNumber}
                </div>
            );
        });

    return (
        <div className="flex items-center justify-center gap-2">
            <div className={
                clsx(
                    classes.base,
                    `${page > 1 ? clsx(classes.enabled) : clsx(classes.disabled)}`,
                )
            }
                onClick={() => handlePageChange(page - 1)}
            >
                <CaretLeftIcon className={'h-[25px] w-[25px]'} />
            </div>
            {
                pageButtons
            }
            <div className={
                clsx(
                    classes.base,
                    `${page < totalPages ? clsx(classes.enabled) : clsx(classes.disabled)}`,
                )
            }
                onClick={() => handlePageChange(page + 1)}
            >
                <CaretRightIcon className='h-[25px] w-[25px]' />
            </div>
        </div>
    );
};
