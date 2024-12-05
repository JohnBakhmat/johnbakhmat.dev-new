import { useEffect, useState } from "react";

export const useWindowSize = () => {
	const [size, setSize] = useState([0, 0]);

	useEffect(() => {
		function handleResize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return size;
};
