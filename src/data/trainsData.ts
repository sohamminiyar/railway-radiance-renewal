
export interface Train {
  trainNumber: string;
  trainName: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureStation: string;
  arrivalStation: string;
  classes: {
    name: string;
    fare: number;
    availability: "Available" | "RAC" | "WL" | "REGRET";
  }[];
  runsOn: string[];
}

export const getTrainsData = (from: string, to: string): Train[] => {
  // Static data - in a real app, this would come from an API
  const trainsData: Train[] = [
    {
      trainNumber: "12951",
      trainName: "Mumbai Rajdhani",
      departureTime: "16:25",
      arrivalTime: "08:15",
      duration: "15h 50m",
      departureStation: "New Delhi",
      arrivalStation: "Mumbai Central",
      classes: [
        { name: "AC 1st Class", fare: 4255, availability: "Available" },
        { name: "AC 2 Tier", fare: 2420, availability: "Available" },
        { name: "AC 3 Tier", fare: 1650, availability: "Available" },
      ],
      runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    {
      trainNumber: "12953",
      trainName: "August Kranti Rajdhani",
      departureTime: "17:05",
      arrivalTime: "10:00",
      duration: "16h 55m",
      departureStation: "New Delhi",
      arrivalStation: "Mumbai Central",
      classes: [
        { name: "AC 1st Class", fare: 4205, availability: "Available" },
        { name: "AC 2 Tier", fare: 2370, availability: "RAC" },
        { name: "AC 3 Tier", fare: 1625, availability: "WL" },
      ],
      runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    {
      trainNumber: "12925",
      trainName: "Paschim Express",
      departureTime: "19:25",
      arrivalTime: "15:10",
      duration: "19h 45m",
      departureStation: "New Delhi",
      arrivalStation: "Bandra Terminus",
      classes: [
        { name: "Sleeper", fare: 780, availability: "Available" },
        { name: "AC 3 Tier", fare: 1550, availability: "Available" },
        { name: "AC 2 Tier", fare: 2250, availability: "Available" },
      ],
      runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    {
      trainNumber: "12909",
      trainName: "Garib Rath Express",
      departureTime: "15:35",
      arrivalTime: "09:00",
      duration: "17h 25m",
      departureStation: "New Delhi",
      arrivalStation: "Mumbai Central",
      classes: [
        { name: "AC 3 Tier", fare: 1200, availability: "Available" },
      ],
      runsOn: ["Mon", "Thu", "Sat"]
    },
    {
      trainNumber: "22221",
      trainName: "Rajdhani Express",
      departureTime: "06:20",
      arrivalTime: "14:10",
      duration: "7h 50m",
      departureStation: "Mumbai Central",
      arrivalStation: "New Delhi",
      classes: [
        { name: "AC 1st Class", fare: 4315, availability: "Available" },
        { name: "AC 2 Tier", fare: 2480, availability: "Available" },
        { name: "AC 3 Tier", fare: 1685, availability: "Available" },
      ],
      runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    {
      trainNumber: "12957",
      trainName: "Swarna Jayanti Express",
      departureTime: "19:55",
      arrivalTime: "09:05",
      duration: "13h 10m",
      departureStation: "New Delhi",
      arrivalStation: "Ahmedabad",
      classes: [
        { name: "Sleeper", fare: 630, availability: "Available" },
        { name: "AC 3 Tier", fare: 1420, availability: "Available" },
        { name: "AC 2 Tier", fare: 2150, availability: "Available" },
      ],
      runsOn: ["Mon", "Wed", "Fri"]
    },
    {
      trainNumber: "12302",
      trainName: "Howrah Rajdhani",
      departureTime: "16:10",
      arrivalTime: "09:55",
      duration: "17h 45m",
      departureStation: "New Delhi",
      arrivalStation: "Kolkata",
      classes: [
        { name: "AC 1st Class", fare: 4520, availability: "Available" },
        { name: "AC 2 Tier", fare: 2650, availability: "Available" },
        { name: "AC 3 Tier", fare: 1855, availability: "RAC" },
      ],
      runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    {
      trainNumber: "12622",
      trainName: "Tamil Nadu Express",
      departureTime: "22:30",
      arrivalTime: "06:45",
      duration: "32h 15m",
      departureStation: "New Delhi",
      arrivalStation: "Chennai Central",
      classes: [
        { name: "Sleeper", fare: 1100, availability: "Available" },
        { name: "AC 3 Tier", fare: 2100, availability: "Available" },
        { name: "AC 2 Tier", fare: 3150, availability: "Available" },
      ],
      runsOn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
  ];

  // Filter trains based on source and destination
  return trainsData.filter(train => {
    // For any cities, return all trains
    if (from === to) return trainsData;
    
    // For specific routes, filter accordingly
    const matchesSource = train.departureStation.includes(from);
    const matchesDestination = train.arrivalStation.includes(to);
    return matchesSource && matchesDestination;
  });
};
