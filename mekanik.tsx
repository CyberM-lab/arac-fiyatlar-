import React, { useState } from 'react';

// Define interfaces for vehicle and service data
interface Vehicle {
    name: string;
    price: number;
}

interface Service {
    value: string;
    price: number;
}

// Vehicle data
const vehicleData: Vehicle[] = [
    { name: "Araç Seç - 0", price: 0 },
      { name: "Admiral", price: 100000 },
      { name: "Alpha", price: 850000 },
      { name: "Asterope", price: 260000 },
      { name: "Asea", price: 255000 },
      { name: "Arias GT", price: 39000 },
      { name: "Asterope 2", price: 315000 },
      { name: "Chavos Luxe", price: 295000 },
      { name: "Cypher Hatchback", price: 285000 },
      { name: "Dilettante", price: 150000 },
      { name: "Futo GTX", price: 85000 },
      { name: "Hustler GT", price: 330000 },
      { name: "Infernus X", price: 1150000 },
      { name: "Imperial", price: 400000 },
      { name: "Imperial Passanger", price: 450000 },
      { name: "Jogger Pas", price: 313000 },
      { name: "Oracle L", price: 6380000 },
      { name: "Odyssey", price: 264000 },
      { name: "Sasevero", price: 2040 },
      { name: "Washington", price: 275000 },
      { name: "Cavalcade 2023", price: 625000 },
      { name: "Buffalo IV", price: 350000 },
      { name: "Sandstorm", price: 320000 },
      { name: "Sandstrom L", price: 350000 },
      { name: "Samdstorm Hell", price: 380000 },
      { name: "Sandstrom LE", price: 420000 },
      { name: "Speedo Courier", price: 265000 },
      { name: "Primo", price: 310000 },
      { name: "Premier", price: 210000 },
      { name: "Stanier", price: 340000 },
      { name: "Scharmann", price: 165000 },
      { name: "Dinka Postlude", price: 100000 },
      { name: "Übermacht Sentinel XS", price: 110000 },
      { name: "Vapid Sadler", price: 115000 },
      { name: "Enus Cognoscenti Cabrio", price: 118000 },
      { name: "Annis Remus", price: 120000 },
      { name: "Dinka Kanjo SJ", price: 130000 },
      { name: "Übermacht Oracle XS", price: 150000 },
      { name: "Ocelot Jackal", price: 200000 },
      { name: "Dewbauchee Exemplar", price: 260000 },
      { name: "Lampadati Felon", price: 300000 },
      { name: "Lampadati Felon Gt", price: 380000 },
      { name: "Enus Windsor Drop", price: 500000 },
      { name: "Ocelot F620", price: 520000 },
      { name: "Albany Alpha", price: 280000 },
      { name: "Bravado Buffalo S", price: 284000 },
      { name: "Benefactor Schwartzer", price: 320000 },
      { name: "Dinka Sugoi", price: 340000 },
      { name: "Karin Futo GTX", price: 360000 },
      { name: "Lampadati Komoda", price: 440000 },
      { name: "Benefactor Schafter V12", price: 440000 },
      { name: "Annis 300R", price: 448000 },
      { name: "Karin Kuruma", price: 450000 },
      { name: "Karin Sultan Custom", price: 544000 },
      { name: "Toundra Panthere", price: 550000 },
      { name: "İnvetero Coquette", price: 560000 },
      { name: "Hijak Khamelion", price: 560000 },
      { name: "Pfister Neon", price: 560000 },
      { name: "Coil Raiden", price: 580000 },
      { name: "Pfister Comet", price: 600000 },
      { name: "ocelot Locust", price: 600000 },
      { name: "Karin Sultan", price: 600000 },
      { name: "Karin Everon Hotring", price: 640000 },
      { name: "Benefactor Surano", price: 640000 },
      { name: "Obey 9F Cabrio", price: 680000 },
      { name: "Enus Paragon", price: 680000 },
      { name: "Vapid Dominator GTX", price: 700000 },
      { name: "Karin Sultan RS", price: 700000 },
      { name: "Penaud La Coureuse", price: 702000 },
      { name: "Dinka jester", price: 720000 },
      { name: "Dewbauchee Seven-70", price: 740000 },
      { name: "Coil Voltic", price: 744000 },
      { name: "Ocelot Jugular", price: 760000 },
      { name: "Dewbauchee Specter", price: 760000 },
      { name: "Pegassi Zentorno", price: 800000 },
      { name: "Maibatsu Penumbra FF", price: 840000 },
      { name: "Emperor Vectre", price: 840000 },
      { name: "Bravado Hotring Hellfire", price: 880000 },
      { name: "Benefactor Schlagen Gt", price: 880000 },
      { name: "Överflöd Imorgon", price: 960000 },
      { name: "Obey 8F Drafter", price: 1000000 },
      { name: "Annis Elegy Retro Custom", price: 1000000 },
      { name: "Annis ZR350", price: 1000000 },
      { name: "Annis Euros", price: 1040000 },
      { name: "Pfister Growler", price: 1040000 },
      { name: "Obey Omnis e-GT", price: 1040000 },
      { name: "Överflöd Zeno", price: 1040000 },
      { name: "Överflöd Entity XXR", price: 1080000 },
      { name: "Übermacht Cypher", price: 1100000 },
      { name: "Maibatsu İtali GTO Stinger TT", price: 1104000 },
      { name: "Progen T20", price: 1120000 },
      { name: "Pegassi Tempesta", price: 1160000 },
      { name: "Obey 10F Widebody", price: 1200000 },
      { name: "Grotti Cheetah Classic", price: 1240000 },
      { name: "Vapid Dominator", price: 1240000 },
      { name: "Pegassi Vacca", price: 1240000 },
      { name: "Grotti Turismo R", price: 1280000 },
      { name: "Ocelot Penetrator", price: 1320000 },
      { name: "Lampadati Tigon", price: 1360000 },
      { name: "Invetero Coquette D10", price: 1600000 },
      { name: "Truffade Thrax", price: 1600000 },
      { name: "Annis Blazer", price: 30000 },
      { name: "Nagasaki Blazer Hot Rod", price: 35000 },
      { name: "Annis Bf İnfection", price: 75000 },
      { name: "Canis Kamacho", price: 135000 },
      { name: "Canis Mesa Merryweather", price: 175000 },
      { name: "Annis Brawler", price: 190000 },
      { name: "Declasse Draugur", price: 195000 },
      { name: "Karin Everon", price: 250000 },
      { name: "Vapid Caracara 4x4", price: 275000 },
      { name: "Annis Dubsta 6x6", price: 300000 },
      { name: "Vapid Flash Gt", price: 370000 },
      { name: "Albany Emperor", price: 12000 },
      { name: "Dundreary Regina", price: 20000 },
      { name: "Enus Stafford", price: 23992 },
      { name: "Albany Primo", price: 24000 },
      { name: "Dundreary Stretch", price: 24000 },
      { name: "Asea", price: 25000 },
      { name: "Declasse Premier", price: 30000 },
      { name: "Albany Washington", price: 30000 },
      { name: "Obey Tailgater", price: 31000 },
      { name: "Enus Cognoscenti", price: 40000 },
      { name: "Benefactor Glendale", price: 40000 },
      { name: "Enus Cognoscenti S", price: 42000 },
      { name: "Chevel Surge", price: 44000 },
      { name: "Vapid Taxi", price: 48000 },
      { name: "Benefactor Glendale Custom", price: 50000 },
      { name: "Albany Primo Custom", price: 50000 },
      { name: "Benefactor Schafter", price: 60000 },
      { name: "Vulcar Warrener", price: 65000 },
      { name: "Cinquemila Lampadati", price: 80000 },
      { name: "Pfister Astron", price: 112000 },
      { name: "Übermacht Rhinehart", price: 240000 },
      { name: "S2 Cabrio Comet", price: 440000 },
      { name: "Surfer", price: 90000 },
      { name: "Bison", price: 128000 },
      { name: "Paradise", price: 72000 },
      { name: "Rumpo", price: 72000 },
      { name: "Rumpo Custom", price: 156000 },
      { name: "Youga", price: 64000 },
      { name: "Youga Classic", price: 116000 },
      { name: "Youga Classic 4x4", price: 180000 },
      { name: "Taco Truck", price: 130000 },
      { name: "Burrito", price: 120000 },
      { name: "Burrito Custom", price: 92000 },
      { name: "Moonbeam", price: 120000 },
      { name: "Mule", price: 70000 },
      { name: "Mule", price: 75000 },
      { name: "Minivan", price: 150000 },
      { name: "Minivan Custom", price: 80000 },
      { name: "Speedo", price: 80000 },
      { name: "journey", price: 40000 },
      { name: "Savestra", price: 800000 },
      { name: "Mamba", price: 740000 },
      { name: "Rapid GT Classic", price: 644000 },
      { name: "GT500", price: 640000 },
      { name: "Coquette BlackFin", price: 642000 },
      { name: "Coquette Classic", price: 640000 },
      { name: "Casco", price: 592000 },
      { name: "Pigalle", price: 768000 },
      { name: "Ardent", price: 640000 },
      { name: "Infernus Classic", price: 992000 },
      { name: "Torero", price: 900000 },
      { name: "Zion Classic", price: 672000 },
      { name: "Dynasty", price: 608000 },
      { name: "Cavalcade II", price: 244000 },
      { name: "Dubsta", price: 204000 },
      { name: "Dubsta Luxury", price: 280000 },
      { name: "Gresley", price: 176000 },
      { name: "Mesa", price: 196000 },
      { name: "Granger", price: 180000 },
      { name: "Landstalker XL", price: 100000 },
      { name: "Habanero", price: 80000 },
      { name: "FQ2", price: 99000 },
      { name: "Baller ST Custom", price: 152000 },
      { name: "Baller", price: 144000 },
      { name: "Baller II", price: 160000 },
      { name: "Baller LE", price: 230000 },
      { name: "Baller LE LWB", price: 160000 },
      { name: "Baller ST", price: 188000 },
      { name: "BeeJay XL", price: 104000 },
      { name: "Novak", price: 88000 },
      { name: "Patriot", price: 104000 },
      { name: "Toros", price: 380000 },
      { name: "Rebla GTS", price: 178000 },
      { name: "Radius", price: 59000 },
      { name: "Buccaneer", price: 425000 },
      { name: "Buccaneer Rider", price: 430000 },
      { name: "Hermes", price: 280000 },
      { name: "Manana Custom", price: 185000 },
      { name: "Weevil Custom", price: 250000 },
      { name: "Classic Gauntlet", price: 350000 },
      { name: "Gauntlet", price: 450000 },
      { name: "Gauntlet Hellfire", price: 650000 },
      { name: "Greenwood", price: 250000 },
      { name: "Picador", price: 100000 },
      { name: "Sabre GT Turbo", price: 125000 },
      { name: "Sabre GT Turbo Custom", price: 200000 },
      { name: "Stallion", price: 220000 },
      { name: "Tornado", price: 85000 },
      { name: "Tornado Custom", price: 120000 },
      { name: "Tulip", price: 80000 },
      { name: "Vamos", price: 150000 },
      { name: "Vigero ZX", price: 800000 },
      { name: "Voodoo", price: 115000 },
      { name: "Vİrgo Custom Classic", price: 185000 },
      { name: "Beater Dukes", price: 190000 },
      { name: "Dukes", price: 140000 },
      { name: "Nightshade", price: 260000 },
      { name: "Phoenix", price: 215000 },
      { name: "Tuiner ZZ-8", price: 350000 },
      { name: "Deviant", price: 300000 },
      { name: "Blade", price: 140000 },
      { name: "Chino", price: 110000 },
      { name: "Chino Luxe", price: 185000 },
      { name: "Dominator", price: 400000 },
      { name: "Ellie", price: 250000 },
      { name: "Impaler", price: 200000 },
      { name: "Peyote", price: 95000 },
      { name: "Peyote Custom", price: 195000 },
      { name: "Slam Truck", price: 400000 },
      { name: "Slam Van", price: 120000 },
      { name: "Faction", price: 120000 },
      { name: "Faction Rider", price: 190000 },
      { name: "Akuma", price: 55000 },
      { name: "Double-T", price: 120000 },
      { name: "Enduro", price: 40000 },
      { name: "Thrust", price: 35000 },
      { name: "Vindicator", price: 104000 },
      { name: "Avarus", price: 130000 },
      { name: "Hexer", price: 140000 },
      { name: "Sanctus", price: 250000 },
      { name: "Innovation", price: 135000 },
      { name: "Manchez", price: 47000 },
      { name: "Sanchez", price: 110000 },
      { name: "Sanchez Livery", price: 117000 },
      { name: "BF400", price: 22500 },
      { name: "Carbon Rs", price: 200000 },
      { name: "Chimera", price: 172000 },
      { name: "Stryder", price: 78000 },
      { name: "Bati 801", price: 250000 },
      { name: "Esskey", price: 112000 },
      { name: "Faggio", price: 10000 },
      { name: "Faggio Mod", price: 15000 },
      { name: "Faggio Sport", price: 20000 },
      { name: "FCR1000 Custom", price: 150000 },
      { name: "FCR1000", price: 130000 },
      { name: "Ruffian", price: 195000 },
      { name: "Vortex", price: 153000 },
      { name: "Lectro", price: 145000 },
      { name: "Nemesis", price: 175000 },
      { name: "Hakuchou", price: 175000 },
      { name: "Hakuchou Drag", price: 220000 },
      { name: "Vader", price: 46000 },
      { name: "Cliffhanger", price: 112000 },
      { name: "Daemon Custom", price: 145000 },
      { name: "Powersurge", price: 45500 },
      { name: "Rat Bike", price: 52000 },
      { name: "Wolfsbane", price: 29400 },
      { name: "Zombie Chopper", price: 42000 },
      { name: "Bagger", price: 70000 },
      { name: "Daemon", price: 125000 },
      { name: "Nightblade", price: 210000 },
      { name: "Sovereign", price: 172000 },
      { name: "Panto", price: 30000 },
      { name: "Club", price: 32000 },
      { name: "Rhapsody", price: 36000 },
      { name: "Blista", price: 9000 },
      { name: "Blista Compact", price: 50000 },
      { name: "Blista Kanjo", price: 40000 },
      { name: "Brioso 300 Widebody", price: 40000 },
      { name: "Dilettante", price: 20000 },
      { name: "Asbo", price: 40000 },
      { name: "Cheburek", price: 40000 },
      { name: "Issi", price: 30000 },
      { name: "Issi Classic", price: 50000 },
      { name: "Issi Rally", price: 70000 },
      { name: "Issi Sport", price: 100000 }
];

// Services data
const services: Service[] = [
    { value: "cleaning", price: 5000 },
    { value: "painting", price: 15000 },
    { value: "repair", price: 10000 },
    { value: "donatecleaning", price: 7500 },
    { value: "donatepainting", price: 17500 },
    { value: "donaterepair", price: 12500 },
];

// Main component
const VehiclePriceCalculator: React.FC = () => {
    const [selectedVehiclePrice, setSelectedVehiclePrice] = useState<number>(0);
    const [vehicleSearchTerm, setVehicleSearchTerm] = useState<string>('');
    const [cosmeticsCount, setCosmeticsCount] = useState<number>(0);
    const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
    const [selectedIllegalServices, setSelectedIllegalServices] = useState<Set<string>>(new Set());

    // Function to format currency
    const formatCurrency = (num: number): string => {
        return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    // Function to calculate vehicle base price
    const calculateVehicleBase = (price: number): number => {
        return price * 0.2;
    };

    // Function to calculate performance price
    const calculatePerformance = (price: number, selectedCount: number): number => {
        const totalCategories = 5; // Assuming 5 performance categories
        if (selectedCount === 0) {
            return 0;
        }
        if (selectedCount === totalCategories) {
            return calculateVehicleBase(price);
        }
        return price * 0.15 * selectedCount;
    };

    // Function to calculate services total
    const calculateServices = (): number => {
        let total = 0;
        selectedServices.forEach(service => {
            const serviceData = services.find(s => s.value === service);
            if (serviceData) {
                total += serviceData.price;
            }
        });
        return total;
    };

    // Function to calculate cosmetics total
    const calculateCosmetics = (): number => {
        return cosmeticsCount > 0 ? cosmeticsCount * 15000 : 0;
    };

    // Function to update summary
    const updateSummary = () => {
        if (selectedVehiclePrice <= 0) {
            return;
        }
        const basePrice = calculateVehicleBase(selectedVehiclePrice);
        const performancePrice = calculatePerformance(selectedVehiclePrice, selectedServices.size);
        const servicesPrice = calculateServices();
        const cosmeticsPrice = calculateCosmetics();

        const total = basePrice + performancePrice + servicesPrice + cosmeticsPrice;

        // Update UI or state with the calculated values as needed
        console.log(`Total Price: ${formatCurrency(total)}`);
    };

    // Function to filter vehicles based on search term
    const filterVehicles = (term: string): Vehicle[] => {
        if (!term) return [];
        const lowerTerm = term.toLowerCase();
        return vehicleData.filter(v => v.name.toLowerCase().includes(lowerTerm));
    };

    // Handle vehicle selection
    const selectVehicle = (vehicle: Vehicle) => {
        setSelectedVehiclePrice(vehicle.price);
        setVehicleSearchTerm(vehicle.name);
        updateSummary();
    };

    // Handle service selection
    const toggleService = (service: string) => {
        const updatedServices = new Set(selectedServices);
        if (updatedServices.has(service)) {
            updatedServices.delete(service);
        } else {
            updatedServices.add(service);
        }
        setSelectedServices(updatedServices);
        updateSummary();
    };

    // Handle illegal service selection (similar to services)
    const toggleIllegalService = (service: string) => {
        const updatedServices = new Set(selectedIllegalServices);
        if (updatedServices.has(service)) {
            updatedServices.delete(service);
        } else {
            updatedServices.add(service);
        }
        setSelectedIllegalServices(updatedServices);
        updateSummary();
    };

    return (
        <div className="container">
            <h1>Araç Fiyat Hesaplayıcı</h1>
            <label htmlFor="vehicle-search">Bir Araç Ara:</label>
            <input
                type="search"
                id="vehicle-search"
                value={vehicleSearchTerm}
                onChange={(e) => setVehicleSearchTerm(e.target.value)}
                placeholder="Araç ismi..."
            />
            <ul>
                {filterVehicles(vehicleSearchTerm).map(vehicle => (
                    <li key={vehicle.name} onClick={() => selectVehicle(vehicle)}>
                        {vehicle.name} - {formatCurrency(vehicle.price)}
                    </li>
                ))}
            </ul>

            <h2>Hizmetler</h2>
            <ul>
                {services.map(service => (
                    <li key={service.value}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedServices.has(service.value)}
                                onChange={() => toggleService(service.value)}
                            />
                            {service.value} - {formatCurrency(service.price)}
                        </label>
                    </li>
                ))}
            </ul>

            <h2>Kozmetikler</h2>
            <label htmlFor="cosmetics-number">Kozmetik Sayısı:</label>
            <input
                type="number"
                id="cosmetics-number"
                min="0"
                value={cosmeticsCount}
                onChange={(e) => setCosmeticsCount(Number(e.target.value))}
            />

            <div>
                <strong>Toplam:</strong> {formatCurrency(calculateVehicleBase(selectedVehiclePrice) + calculateServices() + calculateCosmetics())}
            </div>
        </div>
    );
};

export default VehiclePriceCalculator;
