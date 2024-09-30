import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import NavLink from './components/header/NavLink';

export const metadata: Metadata = {
	title: 'QualiExtra',
	description: "QualiExtra est une entreprise de mise en relation entre réceptionnistes passionnés de l'hôtellerie et établissements exigeants.",
};

const navLinks = [
	{ name: "Tableau de bord", path: "/" }, 
	{ name: "Planning", path: "/planning" },
	{ name: "Missions", path: "/missions" },
	{ name: "Factures", path: "/factures" }
];

export type NavLinksType = {
	name: string;
	path: string;
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="en">
			<body className='flex h-screen overflow-hidden'>
					<header className='hidden sm:flex border border-border w-[200px] h-full font-light text-sm  flex-col sticky top-0 z-10'>
						<div className='px-4 py-5 flex gap-2  items-center border-b border-border'>
							<div className='bg-primary rounded-full h-6 w-6 flex items-center justify-center'>
								<span className='text-white'>C</span>
							</div>
							<span>Ciel Bleu</span>
						</div>
						<nav className='flex flex-col flex-grow mb-6'>
							<div className='w-full flex p-4'>
								<button className='bg-primary text-white py-[10px] rounded-sm w-full'>
									+ Nouvelle mission
								</button>
							</div>
							<ul className='h-full flex flex-col justify-between '>
								<div className='flex flex-col'>
									{
										navLinks.map((link, index) => {
											return (
												<NavLink 
													link={link}
													key={index}
												/>
											)
										})
									}
								</div>
								<div className='flex flex-col gap-4 px-4'>
									<li>
										<Link href={"/"}>
											Paramètres
										</Link>
									</li>
									<li>
										<Link href={"/"}>
											Contact
										</Link>
									</li>
									<li>
										<Link href={"/"}>
											Déconnexion
										</Link>
									</li>
								</div>
							</ul>
						</nav>
					</header>
				<main className='p-4 flex-grow relative overflow-y-auto'>
					{children}
				</main>
			</body>
		</html>
	);
}
