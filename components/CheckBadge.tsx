import { checkSizeMap, classNames } from '../utils/utils';

interface Props {
    checkSize: number;
}

const CheckBadge = ({ checkSize }: Props) => {
    return (
        <span
            className={classNames(
                checkSize === 1
                    ? 'bg-green-100 text-green-800'
                    : checkSize === 2
                    ? 'bg-blue-100 text-blue-800'
                    : checkSize === 3
                    ? 'bg-red-100 text-red-800'
                    : checkSize === 4
                    ? 'bg-cyan-100 text-cyan-800'
                    : checkSize === 5
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-orange-100 text-orange-800',
                'inline-flex rounded-full px-[9px] py-[2px] text-xs font-semibold leading-5  ',
            )}
        >
            {checkSizeMap[checkSize]}
        </span>
    );
};

export default CheckBadge;
