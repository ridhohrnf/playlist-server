import express from "express";
import playlist from "./playlist.json" assert { type: "json" };
const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.get("/", (req, res) => {
	res.json(playlist);
});
app.get("/playlist", (req, res) => {
	const { title, artist, url } = req.query;
	let data = [];

	if (title && artist) {
		data = playlist.filter(
			(playlist) =>
				playlist.title.toLowerCase().includes(title.toLowerCase()) &&
				playlist.artist.toLowerCase().includes(artist.toLowerCase())
		);
	} else if (artist) {
		data = playlist.filter((playlist) =>
			playlist.artist.toLowerCase().includes(artist.toLowerCase())
		);
	} else if (title) {
		data = playlist.filter((playlist) =>
			playlist.title.toLowerCase().includes(title.toLowerCase())
		);
	} else {
		data = playlist;
	}
	if (data.length === 0) {
		return res.status(404).json({ message: "Song or Artist not found" });
	}

	res.json(data);
});

app.post("/play/:title", (req, res) => {
	const songTitle = req.params.title;

	const song = playlist.find(
		(song) => song.title.toLowerCase() === songTitle.toLowerCase()
	);

	if (!song) {
		return res.status(404).json({ message: "Song not found" });
	}

	song.playCount++;
	res.json({ message: `${song.title} play count incremented` });
});

// Endpoint to get playlist sorted by most played songs
app.get("/most-played", (req, res) => {
	const sortedPlaylist = [...playlist].sort(
		(a, b) => b.playCount - a.playCount
	);
	res.json(sortedPlaylist);
});
app.listen(3000, () => {
	console.log("Server running on port 3000");
});
