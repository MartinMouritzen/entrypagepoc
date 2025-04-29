// sections.js
const sections = {
	generalInfo: {
		title: 'General Information',
		groups: [
			{
				title: 'Basic Entry Information',
				fields: [
					{ id: 'logEntryId', label: 'Log Entry ID', type: 'text' },
					{ id: 'dateOfEntry', label: 'Date of Entry', type: 'date' },
					{ id: 'entryAuthor', label: 'Entry Author', type: 'text' },
					{ id: 'authorRank', label: 'Author Rank', type: 'text' },
					{ id: 'securityClearanceLevel', label: 'Security Clearance Level', type: 'select' }
				]
			},
			{
				title: 'Vessel Information',
				fields: [
					{ id: 'starshipName', label: 'Starship Name', type: 'text' },
					{ id: 'registryNumber', label: 'Registry Number', type: 'text' },
					{ id: 'faction', label: 'Faction', type: 'text' },
					{ id: 'commandingOfficer', label: 'Commanding Officer', type: 'text' }
				]
			},
			{
				title: 'Location & Mission',
				fields: [
					{ id: 'sectorCoordinates', label: 'Sector Coordinates', type: 'text' },
					{ id: 'currentLocation', label: 'Current Location', type: 'text' },
					{ id: 'destination', label: 'Destination', type: 'text' },
					{ id: 'missionType', label: 'Mission Type', type: 'select' },
					{ id: 'commsRelayNode', label: 'Comms Relay Node', type: 'text' },
					{ id: 'baseOfOperations', label: 'Base of Operations', type: 'text' }
				]
			}
		]
	},
	starshipSpecs: {
		title: 'Starship Specifications',
		groups: [
			{
				title: 'Ship Classification',
				fields: [
					{ id: 'shipClass', label: 'Ship Class', type: 'text' },
					{ id: 'shipType', label: 'Ship Type', type: 'text' },
					{ id: 'shipManufacturer', label: 'Ship Manufacturer', type: 'text' },
					{ id: 'yearCommissioned', label: 'Year Commissioned', type: 'number' },
					{ id: 'lastOverhaulDate', label: 'Last Overhaul Date', type: 'date' },
					{ id: 'currentStatus', label: 'Current Status', type: 'select' }
				]
			},
			{
				title: 'Technical Specifications',
				fields: [
					{ id: 'hullMaterial', label: 'Hull Material', type: 'text' },
					{ id: 'primaryPowerSource', label: 'Primary Power Source', type: 'text' },
					{ id: 'secondaryPowerSource', label: 'Secondary Power Source', type: 'text' },
					{ id: 'maximumWarpSpeed', label: 'Maximum Warp Speed', type: 'number' },
					{ id: 'crewCapacity', label: 'Crew Capacity', type: 'number' },
					{ id: 'cargoCapacity', label: 'Cargo Capacity', type: 'number' },
					{ id: 'aiCoreVersion', label: 'AI Core Version', type: 'text' }
				]
			},
			{
				title: 'Defense & Armament',
				fields: [
					{ id: 'armamentDetails', label: 'Armament Details', type: 'textarea' },
					{ id: 'shieldSpecifications', label: 'Shield Specifications', type: 'textarea' }
				]
			}
		]
	},
	crewManifest: {
		title: 'Crew Manifest',
		groups: [
			{
				title: 'Manifest Document',
				fields: [
					{ id: 'crewManifestDocument', label: 'Crew Manifest Document', type: 'file' }
				]
			},
			{
				title: 'Command Staff',
				fields: [
					{ id: 'captainName', label: 'Captain Name', type: 'text' },
					{ id: 'firstOfficerName', label: 'First Officer Name', type: 'text' },
					{ id: 'flightOperationsManager', label: 'Flight Operations Manager', type: 'text' }
				]
			},
			{
				title: 'Department Heads',
				fields: [
					{ id: 'chiefEngineerName', label: 'Chief Engineer Name', type: 'text' },
					{ id: 'chiefMedicalOfficerName', label: 'Chief Medical Officer Name', type: 'text' },
					{ id: 'chiefTacticalOfficerName', label: 'Chief Tactical Officer Name', type: 'text' },
					{ id: 'scienceOfficerName', label: 'Science Officer Name', type: 'text' },
					{ id: 'communicationsOfficerName', label: 'Communications Officer Name', type: 'text' },
					{ id: 'securityChiefName', label: 'Security Chief Name', type: 'text' }
				]
			},
			{
				title: 'Specialist Staff',
				fields: [
					{ id: 'diplomaticAttaché', label: 'Diplomatic Attaché', type: 'text' },
					{ id: 'xenobiologistName', label: 'Xenobiologist Name', type: 'text' },
					{ id: 'shipCounselorName', label: 'Ship Counselor Name', type: 'text' },
					{ id: 'moraleOfficerName', label: 'Morale Officer Name', type: 'text' }
				]
			},
			{
				title: 'Department Personnel Counts',
				fields: [
					{ id: 'engineeringTeamSize', label: 'Engineering Team Size', type: 'number' },
					{ id: 'medicalTeamSize', label: 'Medical Team Size', type: 'number' },
					{ id: 'scienceTeamSize', label: 'Science Team Size', type: 'number' },
					{ id: 'securityTeamSize', label: 'Security Team Size', type: 'number' }
				]
			}
		]
	},
	missionDetails: {
		title: 'Mission Details',
		groups: [
			{
				title: 'Mission Identifiers',
				fields: [
					{ id: 'missionId', label: 'Mission ID', type: 'text' },
					{ id: 'missionStartDate', label: 'Mission Start Date', type: 'date' },
					{ id: 'missionEndDate', label: 'Mission End Date', type: 'date' }
				]
			},
			{
				title: 'Mission Purpose',
				fields: [
					{ id: 'primaryObjective', label: 'Primary Objective', type: 'textarea' },
					{ id: 'secondaryObjectives', label: 'Secondary Objectives', type: 'textarea' },
					{ id: 'missionSummary', label: 'Mission Summary', type: 'textarea' }
				]
			},
			{
				title: 'Target Information',
				fields: [
					{ id: 'targetPlanetName', label: 'Target Planet Name', type: 'text' },
					{ id: 'targetPlanetType', label: 'Target Planet Type', type: 'select' },
					{ id: 'estimatedHostilityLevel', label: 'Estimated Hostility Level', type: 'range' }
				]
			},
			{
				title: 'Mission Outcomes',
				fields: [
					{ id: 'tradeAgreementsNegotiated', label: 'Trade Agreements Negotiated', type: 'textarea' },
					{ id: 'scientificDiscoveriesMade', label: 'Scientific Discoveries Made', type: 'textarea' },
					{ id: 'unknownAnomaliesEncountered', label: 'Unknown Anomalies Encountered', type: 'textarea' },
					{ id: 'notableEncounters', label: 'Notable Encounters', type: 'textarea' },
					{ id: 'distressCallsReceived', label: 'Distress Calls Received', type: 'number' },
					{ id: 'diplomaticIncidentsReported', label: 'Diplomatic Incidents Reported', type: 'number' },
					{ id: 'cargoManifestSummary', label: 'Cargo Manifest Summary', type: 'textarea' },
					{ id: 'newTechnologiesTested', label: 'New Technologies Tested', type: 'textarea' }
				]
			}
		]
	},
	incidentReports: {
		title: 'Incident Reports',
		groups: [
			{
				title: 'Incident Summary',
				fields: [
					{ id: 'totalIncidentsReported', label: 'Total Incidents Reported', type: 'number' },
					{ id: 'blackBoxRecordingLink', label: 'Black Box Recording Link', type: 'url' },
					{ id: 'debriefingOfficerName', label: 'Debriefing Officer Name', type: 'text' }
				]
			},
			{
				title: 'Technical Incidents',
				fields: [
					{ id: 'mechanicalFailures', label: 'Mechanical Failures', type: 'number' },
					{ id: 'criticalSystemFailures', label: 'Critical System Failures', type: 'number' }
				]
			},
			{
				title: 'Personnel Incidents',
				fields: [
					{ id: 'medicalEmergencies', label: 'Medical Emergencies', type: 'number' },
					{ id: 'deathsReported', label: 'Deaths Reported', type: 'number' },
					{ id: 'disappearancesReported', label: 'Disappearances Reported', type: 'number' },
					{ id: 'mutiniesPrevented', label: 'Mutinies Prevented', type: 'number' },
					{ id: 'espionageSuspicions', label: 'Espionage Suspicions', type: 'number' }
				]
			},
			{
				title: 'External Incidents',
				fields: [
					{ id: 'combatEngagements', label: 'Combat Engagements', type: 'number' },
					{ id: 'interdimensionalRiftEvents', label: 'Interdimensional Rift Events', type: 'number' },
					{ id: 'firstContactEvents', label: 'First Contact Events', type: 'number' },
					{ id: 'environmentalHazardsEncountered', label: 'Environmental Hazards Encountered', type: 'textarea' }
				]
			}
		]
	}
};
export default sections;