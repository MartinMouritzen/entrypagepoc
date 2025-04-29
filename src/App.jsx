import React, { useState } from 'react';
import sections from './sections.js'; // your sections file

// Tab icons
const sectionIcons = {
	generalInfo: "🚀",
	starshipSpecs: "🛠️",
	crewManifest: "👥",
	missionDetails: "🧪",
	incidentReports: "🔍",
	environmentalData: "🌌",
	technicalLogs: "🛡️",
	attachedMedia: "📷",
	classifiedAddendum: "🛑"
};

// Sidebar outline icons (different than tab icons)
const outlineIcons = {
	generalInfo: "📝",
	starshipSpecs: "🚢",
	crewManifest: "👨‍👩‍👧‍👦",
	missionDetails: "🎯",
	incidentReports: "⚠️",
	environmentalData: "🌍",
	technicalLogs: "💻",
	attachedMedia: "🎬",
	classifiedAddendum: "🔒"
};

const StarshipLogEntryInterface = () => {
	const [activeTab, setActiveTab] = useState('generalInfo');
	const [favorites, setFavorites] = useState({});

	const toggleFavorite = (sectionId, fieldId) => {
		setFavorites(prev => {
			const sectionFavorites = prev[sectionId] || [];
			if (sectionFavorites.includes(fieldId)) {
				return {
					...prev,
					[sectionId]: sectionFavorites.filter(id => id !== fieldId)
				};
			}
			else {
				return {
					...prev,
					[sectionId]: [...sectionFavorites, fieldId]
				};
			}
		});
	};

	const scrollToField = (fieldId) => {
		document.getElementById(fieldId)?.scrollIntoView({ behavior: 'smooth' });
	};

	const scrollToGroup = (groupId) => {
		document.getElementById(groupId)?.scrollIntoView({ behavior: 'smooth' });
	};

	const renderField = (field) => {
		const isFavorite = (favorites[activeTab] || []).includes(field.id);

		let fieldInput;
		switch (field.type) {
			case 'textarea':
				fieldInput = (
					<textarea
						id={field.id}
						placeholder={`Enter ${field.label.toLowerCase()}...`}
						className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 transition-all resize-vertical"
						rows="4"
					/>
				);
				break;
			case 'select':
				fieldInput = (
					<select
						id={field.id}
						className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 transition-all"
					>
						<option value="">Select...</option>
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
					</select>
				);
				break;
			case 'file':
			case 'file-multiple':
				fieldInput = (
					<input
						type="file"
						id={field.id}
						multiple={field.type === 'file-multiple'}
						className="block w-full text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer focus:outline-none p-2"
					/>
				);
				break;
			case 'range':
				fieldInput = (
					<input
						type="range"
						id={field.id}
						className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
						min="0"
						max="100"
					/>
				);
				break;
			case 'checkbox':
				fieldInput = (
					<div className="flex items-center">
						<input
							id={field.id}
							type="checkbox"
							className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
						/>
						<label htmlFor={field.id} className="ml-2 text-gray-700">
							Yes, {field.label.toLowerCase()}
						</label>
					</div>
				);
				break;
			default:
				fieldInput = (
					<input
						type={field.type}
						id={field.id}
						placeholder={`Enter ${field.label.toLowerCase()}...`}
						className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400 transition-all"
					/>
				);
		}

		return (
			<div key={field.id} className="relative mb-5" id={field.id}>
				<div className="flex justify-between items-center mb-2">
					<label htmlFor={field.id} className="text-sm font-semibold text-gray-700">{field.label}</label>
					<button
						onClick={() => toggleFavorite(activeTab, field.id)}
						className={`p-1 rounded focus:outline-none ${isFavorite ? 'text-yellow-500' : 'text-gray-400'} hover:bg-gray-200 transition-colors`}
					>
						{isFavorite ? '★' : '☆'}
					</button>
				</div>
				{fieldInput}
			</div>
		);
	};

	const currentSection = sections[activeTab];
	const favoriteFields = (favorites[activeTab] || []).map(favId =>
		currentSection.groups.flatMap(g => g.fields).find(f => f.id === favId)
	).filter(Boolean);

	return (
		<div className="flex flex-col h-screen overflow-hidden font-['Inter',sans-serif] bg-gray-100">
			{/* Added custom font and included it in the main container */}
			<style>
				{`
				@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
				`}
			</style>

			<header className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 text-white shadow">
				<div className="flex justify-between items-center max-w-7xl mx-auto w-full">
					<div>
						<h1 className="text-2xl font-bold">Starship Log Entry</h1>
						<p className="text-blue-200 text-sm">Starfleet Standard Logging Protocol v4.7</p>
					</div>
					<div className="space-x-3">
						<button className="bg-blue-700 hover:bg-blue-500 px-5 py-2 rounded shadow">Save</button>
						<button className="bg-gray-500 hover:bg-gray-400 px-5 py-2 rounded shadow">Cancel</button>
					</div>
				</div>
			</header>

			{/* Pill-style tabs with rounded corners */}
			<div className="bg-gray-100 pt-4 px-2">
				<div className="flex max-w-7xl mx-auto w-full pb-4">
					{Object.keys(sections).map(sectionId => (
						<div
							key={sectionId}
							className="flex-shrink-0 w-60 px-1"
						>
							<button
								onClick={() => setActiveTab(sectionId)}
								className={`w-full px-2 py-2 font-medium transition-colors rounded-full ${activeTab === sectionId
									? 'bg-white text-blue-700 shadow-md border border-gray-200'
									: 'text-gray-600 hover:bg-white hover:bg-opacity-50'
									}`}
							>
								<div className="overflow-hidden text-ellipsis whitespace-nowrap">
									{sectionIcons[sectionId]} {sections[sectionId].title}
								</div>
							</button>
						</div>
					))}
				</div>
			</div>

			{/* Body - Changed all backgrounds to match */}
			<div className="flex flex-1 overflow-hidden mx-auto bg-gray-100" style={{ width: "1300px" }}>
				{/* Outline */}
				<aside className="w-64 bg-gray-100 p-5 overflow-y-auto">
					{favoriteFields.length > 0 && (
						<>
							<h3 className="text-sm font-medium text-yellow-600 mb-2 flex items-center">⭐ Favorites</h3>
							<ul className="space-y-2 mb-5">
								{favoriteFields.map(field => (
									<li key={field.id}>
										<button
											className="text-left text-sm text-blue-600 hover:underline"
											onClick={() => scrollToField(field.id)}
										>
											{field.label}
										</button>
									</li>
								))}
							</ul>
						</>
					)}


					{currentSection.groups.map((group, groupIndex) => (
						<div key={groupIndex} className="mb-4">
							<button
								className="text-left text-gray-700 text-sm font-medium hover:underline"
								onClick={() => scrollToGroup(`group-${activeTab}-${groupIndex}`)}
							>
								📑 {group.title}
							</button>
							<ul className="pl-4 mt-2 space-y-1">
								{group.fields
									.filter(field => !(favorites[activeTab] || []).includes(field.id))
									.map(field => (
										<li key={field.id}>
											<button
												className="text-left pl-4 text-gray-600 text-sm hover:underline"
												onClick={() => scrollToField(field.id)}
											>
												{field.label}
											</button>
										</li>
									))}
							</ul>
						</div>
					))}
				</aside>

				{/* Main Content - Changed background to match sidebar */}
				<main className="flex-1 overflow-y-auto bg-gray-100 p-8">
					<div className="max-w-3xl mx-auto space-y-8">
						{favoriteFields.length > 0 && (
							<div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-200">
								<h2 className="text-lg font-semibold text-yellow-700 mb-4 flex items-center">
									⭐ Favorite Fields
								</h2>
								{favoriteFields.map(field => renderField(field))}
							</div>
						)}

						{currentSection.groups.map((group, groupIndex) => (
							<div
								key={groupIndex}
								id={`group-${activeTab}-${groupIndex}`}
								className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
							>
								<h2 className="text-xl font-bold text-gray-800 mb-6">{group.title}</h2>
								<div className="grid gap-6">
									{group.fields
										.filter(field => !(favorites[activeTab] || []).includes(field.id))
										.map(field => renderField(field))}
								</div>
							</div>
						))}
					</div>
				</main>
			</div>
		</div>
	);
};

export default StarshipLogEntryInterface;