import { useRouter } from 'next/router'; // Importer useRouter
import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const navLinks = [
	{ name: "Tableau de bord", path: "/" }, // Définir les chemins pour chaque lien
	{ name: "Planning", path: "/planning" },
	{ name: "Missions", path: "/missions" },
	{ name: "Factures", path: "/factures" }
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="en">
			<body className='flex h-screen'>
				<header className='border border-border w-[200px] h-full font-light text-sm flex flex-col'>
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
								<li className='flex '>
									<Link href={"/"} className='w-full p-4'>
										Tableau de bord
									</Link>
								</li>
								<li className='flex'>
									<Link href={"/"} className='w-full p-4'>
										Planning
									</Link>
								</li>
								<li className='flex'>
									<Link href={"/"} className=' w-full p-4 bg-primaryLight'>
										Missions
									</Link>
								</li>
								<li className='flex'>
									<Link href={"/"} className='w-full p-4'>
										Factures
									</Link>
								</li>
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
				{children}
			</body>
		</html>
	);
}
