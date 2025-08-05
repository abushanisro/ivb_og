import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StartupCard from "./StartupCard";
import BatchFilter from "./BatchFilter";

const startups = [
  
  {
    id: 2,
    name: "Ecovo",
    description:
      "Aggregator platform for EV charging stations across India, enabling seamless discovery, booking, and payments.",
    founders: [
      { name: "Aryan", avatar: "" },
      { name: "Abushan", avatar: "" },
    ],
    batch: "2027",
    category: "Mobility",
    image: "https://media.licdn.com/dms/image/v2/D560BAQF0mjJjHs4pYw/company-logo_100_100/company-logo_100_100/0/1734192289009?e=1757548800&v=beta&t=VMKeFb7WhdyF8qkPlDjIVjQjR7s23xYlK8N-8uEbSgw",
  },
  {
    id: 3,
    name: "Girt",
    description:
      "India's first job portal dedicated only to sales roles, connecting ambitious professionals with fast-growing startups.",
    founders: [
      { name: "Om", avatar: "" },
      { name: "Abinav", avatar: "" },
    ],
    batch: "2027",
    category: "Recruitment",
    image: "https://media.licdn.com/dms/image/v2/D4D0BAQHS9nshUqb-JA/company-logo_200_200/B4DZbYi5B0H8AI-/0/1747389747846/gritrecruit_logo?e=1757548800&v=beta&t=HCVzDRZN5axABZ7AUt2Bk1BWIs8G6adO8ggJPkYm-_o",
  },
  {
    id: 4,
    name: "Starw",
    description:
      "A sustainable marketplace for eco-friendly and zero-waste products sourced from verified sellers across India.",
    founders: [
      { name: "Shreya", avatar: "" },
      { name: "Palak", avatar: "" },
    ],
    batch: "2027",
    category: "Sustainability",
    image: "https://media.licdn.com/dms/image/v2/D560BAQEX7fT3efqTOg/company-logo_200_200/B56ZUujqeyGUAM-/0/1740242856436?e=1757548800&v=beta&t=7mWSIG6izME3Aq2pVkGdKrZACosnt5IYP3xk5zV95D0",
  },
  {
    id: 5,
    name: "Cursious AI",
    description:
      "An AI agent that automates the workflow of educational content creation for edtech platforms and creators.",
    founders: [
      { name: "Varun", avatar: "" },
      { name: "Abushan", avatar: "" },
    ],
    batch: "2027",
    category: "AI/EdTech",
    image: "https://media.licdn.com/dms/image/v2/D560BAQEyC9BtJfOp8w/company-logo_100_100/B56ZeIc7ffH8Ac-/0/1750340975125?e=1757548800&v=beta&t=8gK5c2ysb4X3DsWmdaQ6LzzshCPcQ0AnBaW7gG4ZXbs",
  },
  {
    id: 6,
    name: "Clipsy",
    description:
      "AI-powered smart glasses designed to enhance mobility and independence for the visually impaired community.",
    founders: [
      { name: "Adnan", avatar: "" },
      { name: "Siva", avatar: "" },
    ],
    batch: "2027",
    category: "HealthTech",
    founded: "May 2023",
    image: "https://media.licdn.com/dms/image/v2/D560BAQHe9MMWoeJxfg/company-logo_100_100/company-logo_100_100/0/1739132040836/clipsy_vision_logo?e=1757548800&v=beta&t=D6ZOR_T_sf69cnmUxDKodPykNbohnn6JYcvxtTLEn68",
  },
  {
    id: 7,
    name: "ShaadiMe",
    description:
      "A wedding planning app to plan your wedding in 10 mins",
    founders: [
      { name: "Sai Venkat", avatar: "" },
      { name: "Shasikanth", avatar: "" },
    ],
    batch: "2027",
    category: "Wedding Tech",
    image: "https://media.licdn.com/dms/image/v2/D560BAQGX1YbPOw6_HA/company-logo_200_200/B56ZeJz6uYGoAQ-/0/1750363778395/shaadime_logo?e=1757548800&v=beta&t=V0wOQBKeSVlf-0Qe4Ye20718c-HMxX-g1GmHabwOpEc",
  },
];

const StartupDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeBatch, setActiveBatch] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const batches = useMemo(() => {
    const uniqueBatches = [...new Set(startups.map((s) => s.batch))];
    return uniqueBatches.sort((a, b) => parseInt(b) - parseInt(a));
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(startups.map((s) => s.category))];
    return uniqueCategories.sort();
  }, []);

  const filteredStartups = useMemo(() => {
    return startups.filter((startup) => {
      const matchesSearch =
        startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.founders.some((f) =>
          f.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesBatch = activeBatch === null || startup.batch === activeBatch;
      const matchesCategory =
        categoryFilter === "all" || startup.category === categoryFilter;

      return (
        matchesSearch && matchesBatch && matchesCategory
      );
    });
  }, [searchTerm, activeBatch, categoryFilter]);

  return (
    <section id="directory" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Startup Directory
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore innovative ideas and ventures from our entrepreneurial
            community
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search startups, founders, or ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Batch Filter */}
          <BatchFilter
            batches={batches}
            activeBatch={activeBatch}
            onBatchChange={setActiveBatch}
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter:</span>
            </div>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStartups.map((startup) => (
            <StartupCard
              key={startup.id}
              name={startup.name}
              description={startup.description}
              founders={startup.founders}
              batch={startup.batch}
              category={startup.category}
              image={startup.image}
            />
          ))}
        </div>

        {filteredStartups.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              No startups found matching your criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setActiveBatch(null);
                setCategoryFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default StartupDirectory;