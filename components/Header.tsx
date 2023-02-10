import Image from "next/image";

const Header = () => {
	const links = ['Home', 'Products', 'About'];
	
	// Tailwind styling
	const headerStyling = "fixed h-[120px] w-[100%] bg-blue-600 flex";
	const logoDivStyling = "flex-1 justify-center items-center";
	const tabDivStyling = "flex-1 flex-row flex space-x-[40px] mt-[70px] justify-end mr-[20px]";
	const desktopTabStyling = "bg-black h-[25px] w-[100px] rounded-sm text-center text-white";
	const logoStyling = "w-[50px] h-[50px] bg-black"
	// Render menu tabs
	const renderMenuTabs = () => {
		return(
		<>
			{links.map((link) => (				
						<div className={desktopTabStyling} key={link}>
							{link}
						</div>				
			))}
		</>
		)
	}

	return (
		<header className={headerStyling}>
			<div className={logoDivStyling}>
				<div className={logoStyling}></div>
			</div>
			<div className={tabDivStyling}>
				{renderMenuTabs()}
			</div>
		</header>
	)
};

export default Header;