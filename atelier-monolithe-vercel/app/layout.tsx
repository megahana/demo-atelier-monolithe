import type {Metadata} from 'next';import './globals.css';
import {Analytics} from '@vercel/analytics/next';
export const metadata:Metadata={title:'Atelier Monolithe — Architecture. Marseille.',description:'Architecture résidentielle et culturelle. Explorez Villa Cassis en trois dimensions.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}<Analytics /></body></html>}
