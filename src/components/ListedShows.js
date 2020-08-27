import React, { useContext, useEffect, useState } from "react";
import { SerialContext } from "../SerialContext";
import Card from "../components/Card";

export default function ListedShows() {
	const { loadedSerial, loadingData } = useContext(SerialContext);
	const [serial] = loadedSerial;
	const [, setLoading] = loadingData;
	const [load, setLoad] = useState(false);
	console.log(serial);

	useEffect(() => {
		function waitForElement() {
			if (
				typeof serial !== "undefined" &&
				serial != null &&
				serial.length != null &&
				serial.length > 0
			) {
				setLoad(false);
			} else {
				setTimeout(waitForElement, 250);
			}
		}

		waitForElement();
	}, [load, serial, setLoading]);

	return (
		<div>
			{load ? (
				<h1>'Loading ...'</h1>
			) : (
					<>
						{serial.map((ser) => (
							<Card shows={ser}></Card>
						))}
					</>
				)}
		</div>
	);
}
