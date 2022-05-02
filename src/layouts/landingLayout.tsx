const LandingLayout = (props: landingType) => {
  return <div className='bg-[#03041A]'>{props.children}</div>;
};

interface landingType {
  children?: any;
}

export default LandingLayout;
