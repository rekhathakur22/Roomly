import hero from '../../../../../assets/hero.jpg'
const Hero = () => {
 return  (
    <div>
     <img src={hero} alt="hero image" className='absolute inset-0  w-full h-50 object-cover object-center' />
    </div>
 )
}

export default Hero;