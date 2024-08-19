import clsx from 'clsx';
import Facebook from '@assets/icons/Facebook';
import Google from '@assets/icons/Google';
import Linkedin from '@assets/icons/Linkedin';

const Social = () => {
  return (
    <div
      className={clsx(
        'flex',
        'row',
        'content-center',
        'justify-center',
        'elements-center',
        'h-full',
        'gap-2'
      )}
    >
      <div className={clsx('rounded-full', 'border', 'border-gray-200', 'p-2')}>
        <Facebook width="24px" height="24px" />
      </div>
      <div className={clsx('rounded-full', 'border', 'border-gray-200', 'p-2')}>
        <Google width="24px" height="24px" />
      </div>
      <div className={clsx('rounded-full', 'border', 'border-gray-200', 'p-2')}>
        <Linkedin width="24px" height="24px" />
      </div>
    </div>
  );
};

export default Social;
