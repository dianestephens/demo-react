import UGAitems from "@/UGAitems.json";
import Item from "@/components/Item";

const Items = () => {
    return (
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>
                {UGAitems.length === 0 ? (
                    <p>No UGA items available</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {UGAitems.map((item) => (  
                        <Item key={item._id} item={item} />
                    ))}
                        
                    </div>
                )}
            </div>
        </section>
    );
};
export default Items; 