'use client'
import React from 'react';
import { useState } from 'react'
import Modal from 'react-modal'

import Image from 'next/image'

interface ContactProps {
	ctaText: string;
	buttonColor: string;
}

const Contact: React.FC<ContactProps> = ({ ctaText, buttonColor }) => {

	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const customStyles = {
		overlay: {
			backgroundColor: 'rgba(32, 32, 32, 0.4)',
		},
		content: {
			top: '50%',
			left: '50%',
			border: '1px solid #ccc',
			padding: '20px',
		},
	};

	return (
		<>
			<button
				onClick={openModal}
				className={`cta ${buttonColor === "white" ? "cta--white" : ""}`}
				style={{ backgroundColor: buttonColor }}
			>
				{ctaText}
			</button>
			<Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
				style={customStyles}
                className="modal"
                contentLabel="Burger Modal"
            >
				<div className="contact-container" id="contact">
					<button
						className="close-modal"
						onClick={closeModal}
					>
						<Image
							src='/icons/close-x.svg'
							alt="X-twitter"
							width={32}
							height={32}
						/>
					</button>
					<iframe 
						src="https://docs.google.com/forms/d/e/1FAIpQLSfjwXRImjlxgswN9Ct0pdgYWrXrKGLU3GrnhsTuvr-xTtuygg/viewform?usp=pp_url&entry.919785290=Landing/viewform?embedded=true"
						width="100%"
						height="100%"
						style={{ zIndex: 9999 }}
						>Loading…
					</iframe>
				</div>
			</Modal>
		</>
	)
}

export default Contact
