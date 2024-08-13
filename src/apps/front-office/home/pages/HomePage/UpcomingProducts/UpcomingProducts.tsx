import dotchat from '../../../../../../shared/assets/images/Rectangle 44.svg'
import dotcloud from '../../../../../../shared/assets/images/Rectangle 47.svg'
import '../HomePage.css'
const  UpcomingProducts: React.FC=()=> {
    return (
        <>
        <div className="py-14 w-4/5 m-auto   border-y border-gray-200">
            <h3 className="text-2xl leading-8 mb-5"><strong>Upcoming</strong> Products</h3>
            <p className="mb-5 text-gray-600 sm:text-sm text-xs">Alohadot plans to expand it’s product lines to encompass services in every sector</p>
            <div className='lg:flex  lg:gap-7 grid grid-cols-2 gap-4 fade-in-image'>
            <img src={dotchat} className='lg:w-1/4' alt="dotchat" />
            <img src={dotcloud} className='lg:w-1/4'  alt="dotcloud" />
            <img src={dotcloud} className='lg:w-1/4' alt="" />
            <img src={dotcloud} className='lg:w-1/4' alt="" />
            </div>
           
            </div>
            </>
    )
}
export default UpcomingProducts;
