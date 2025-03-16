import Image from 'next/image';
import Welcome from '@/components/Welcome';
import bgarch from '@/assets/UGAbw-arch.jpg';

const Content = () => {

    return (
        <div >
            <Image 
                src={bgarch}
                alt="Background UGA arch" 
                fill
                priority={true}
                className="object-cover w-full h-full z-[-1]"
            />
            <Welcome />
           
        </div>
    );
};

export default Content;
