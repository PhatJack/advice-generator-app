import { useEffect } from "react";
import { useState } from "react";

function App() {

	const [advice, setAdvice] = useState({
		id: "117",
		advice: "It's is easy to sit up and take notice,what's difficult is getting up and taking action."
	});

	const fetchAPI = async () => {
		try {
			const res = await fetch("https://api.adviceslip.com/advice");
			if (!res.ok) {
				throw new Error("Failed to fetch advice");
			}
			const data = await res.json();
			setAdvice(data.slip);
		} catch (error) {
			console.error("Error fetching advice:", error);
		}
	};

	useEffect(() => {
		fetchAPI();
	}, []);
	return (
		<>
			<div className="w-full h-screen flex justify-center items-center bg-dark-blue p-5">
				<div
					className="w-full md:w-[540px] h-[330px] bg-dark-grayish-blue rounded-xl p-6 md:px-8 md:py-12
								flex flex-col gap-[30px] items-center relative">
					<header className="text-center flex items-center justify-center gap-2">
						<h3 className="text-sm tracking-[0.25em] text-neon-green font-bold">ADVICE</h3>
						<h3 className="text-sm tracking-[0.25em] text-neon-green font-bold">#{advice.id}</h3>
					</header>
					<main className="h-[105px] text-center text-[1.5rem] text-light-cyan font-bold relative">
						<p>"{advice.advice}"</p>
					</main>
					<footer className="mt-2">
						<svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
					</footer>
					<button
						type="button" onClick={() => fetchAPI()}
						className="bg-neon-green p-5 rounded-full absolute -bottom-8 transition-all duration-500 hover:shadow-custom rotate-0 hover:rotate-180">
						<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
					</button>
				</div>
			</div>
		</>
	)
}

export default App
