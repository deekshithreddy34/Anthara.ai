import React from 'react';
import { AntharaView } from '@/src/anthara/AntharaView';

export const metadata = {
    title: 'Anthara AI 3D Architecture Visualization',
    description: 'An interactive 3D architectural walkthrough of the Anthara AI In-IDE Conduct Layer and Compliance Governance Engine.',
};

export default function AntharaPage() {
    return (
        <main className="w-full h-full min-h-screen bg-white">
            <AntharaView />
        </main>
    );
}
