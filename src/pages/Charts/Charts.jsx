import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import api from "../../api/JioSaavnApi";
import Card from "../../components/Card/Card";
import SongCard from "../../components/Card/SongsCard";

const Charts = () => {
	const {
		state: { id, type },
	} = useLocation();

	const [featured, setfeatured] = useState([]);

	useEffect(() => {
		const fetchCharts = async () => {
			const response = await api.getPlaylistDetails(id);
			setfeatured(response);
		};
		try {
			fetchCharts();
		} catch (error) {
			console.log("Unable to fetch Albums: ", error);
		}
	}, [featured.length, id]);

	return (
		<>
			<Card item={featured} type={type}></Card>
			<SongCard item={featured} />
		</>
	);
};

export default Charts;
