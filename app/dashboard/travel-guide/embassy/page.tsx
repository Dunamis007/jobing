"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Building,
  Phone,
  Mail,
  Globe,
  MapPin,
  Clock,
  ExternalLink,
  Calendar,
  Filter,
  ChevronRight,
} from "lucide-react"

// Mock data for embassy contacts
const embassyContacts = [
  {
    id: 1,
    country: "United Kingdom",
    locations: [
      {
        city: "Abuja",
        address: "Plot 1157, Diplomatic Drive, Central Business District, Abuja",
        phone: "+234 (0) 9 462 3100",
        email: "ukininigeria@fco.gov.uk",
        website: "https://www.gov.uk/world/organisations/british-high-commission-abuja",
        workingHours: "Monday to Thursday: 8:00 AM - 4:30 PM, Friday: 8:00 AM - 1:00 PM",
        services: ["Visa Services", "Consular Services", "Trade & Investment"],
        appointmentRequired: true,
        notes: "Visa applications are processed through TLS Contact centers.",
      },
      {
        city: "Lagos",
        address: "11 Walter Carrington Crescent, Victoria Island, Lagos",
        phone: "+234 (0) 1 277 0400",
        email: "ukininigeria@fco.gov.uk",
        website: "https://www.gov.uk/world/organisations/british-deputy-high-commission-lagos",
        workingHours: "Monday to Thursday: 8:00 AM - 4:30 PM, Friday: 8:00 AM - 1:00 PM",
        services: ["Visa Services", "Consular Services", "Trade & Investment"],
        appointmentRequired: true,
        notes: "Visa applications are processed through TLS Contact centers.",
      },
    ],
  },
  {
    id: 2,
    country: "United States",
    locations: [
      {
        city: "Abuja",
        address: "Plot 1075, Diplomatic Drive, Central District Area, Abuja",
        phone: "+234 (0) 9 461 4000",
        email: "consularabuja@state.gov",
        website: "https://ng.usembassy.gov/",
        workingHours: "Monday to Thursday: 7:30 AM - 4:30 PM, Friday: 7:30 AM - 1:30 PM",
        services: ["Visa Services", "American Citizen Services", "Commercial Services"],
        appointmentRequired: true,
        notes: "All visa applicants must schedule an appointment online.",
      },
      {
        city: "Lagos",
        address: "2 Walter Carrington Crescent, Victoria Island, Lagos",
        phone: "+234 (0) 1 460 3400",
        email: "lagoscons2@state.gov",
        website: "https://ng.usembassy.gov/embassy-consulates/lagos/",
        workingHours: "Monday to Thursday: 7:30 AM - 4:30 PM, Friday: 7:30 AM - 1:30 PM",
        services: ["Visa Services", "American Citizen Services"],
        appointmentRequired: true,
        notes: "All visa applicants must schedule an appointment online.",
      },
    ],
  },
  {
    id: 3,
    country: "Canada",
    locations: [
      {
        city: "Abuja",
        address: "The Coeur Business Centre, 4th Floor, Plot 1129 Thaba Tseka Street, Wuse II, Abuja",
        phone: "+234 (0) 9 461 2900",
        email: "abuja@international.gc.ca",
        website:
          "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/international-visa-offices/abuja.html",
        workingHours: "Monday to Thursday: 8:00 AM - 4:30 PM, Friday: 8:00 AM - 1:00 PM",
        services: ["Visa Services", "Consular Services", "Immigration Services"],
        appointmentRequired: true,
        notes: "Visa applications are processed through VFS Global.",
      },
    ],
  },
  {
    id: 4,
    country: "Australia",
    locations: [
      {
        city: "Abuja",
        address: "48 Aguiyi Ironsi Street, Maitama, Abuja",
        phone: "+234 (0) 9 461 2780",
        email: "ahc.abuja@dfat.gov.au",
        website: "https://nigeria.embassy.gov.au/",
        workingHours: "Monday to Friday: 8:30 AM - 4:30 PM",
        services: ["Visa Services", "Consular Services", "Trade Services"],
        appointmentRequired: true,
        notes: "Visa applications are lodged online or through VFS Global.",
      },
    ],
  },
]

export default function EmbassyContactsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  // Filter embassy contacts based on search query
  const filteredEmbassies = embassyContacts.filter(
    (embassy) =>
      embassy.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      embassy.locations.some(
        (location) =>
          location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          location.services.some((service) => service.toLowerCase().includes(searchQuery.toLowerCase())),
      ),
  )

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Embassy Contacts"
        text="Directory of embassy and consulate contacts for international travel"
      >
        <Button variant="outline">
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Appointment
        </Button>
      </DashboardHeader>

      <div className="space-y-6">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by country, city, or service..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <select
              className="px-3 py-2 rounded-md border border-input bg-background text-sm"
              value={selectedRegion || ""}
              onChange={(e) => setSelectedRegion(e.target.value || null)}
            >
              <option value="">All Regions</option>
              <option value="africa">Africa</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="north-america">North America</option>
              <option value="oceania">Oceania</option>
              <option value="south-america">South America</option>
            </select>
          </div>
        </div>

        {/* Embassy Listings */}
        <div className="space-y-6">
          {filteredEmbassies.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <Building className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No Embassies Found</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  We couldn't find any embassies matching your search criteria. Try adjusting your filters or search
                  terms.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredEmbassies.map((embassy) => (
              <Card key={embassy.id}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <CardTitle>{embassy.country} Embassy & Consulates</CardTitle>
                  </div>
                  <CardDescription>
                    {embassy.locations.length} location{embassy.locations.length > 1 ? "s" : ""} in Nigeria
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {embassy.locations.map((location, index) => (
                    <div key={index} className="space-y-4">
                      {index > 0 && <Separator />}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-medium">{location.city} Office</h3>
                          <div className="flex items-start gap-2 mt-2">
                            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <p className="text-sm">{location.address}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {location.services.map((service, i) => (
                            <Badge key={i} variant="outline">
                              {service}
                            </Badge>
                          ))}
                          {location.appointmentRequired && <Badge className="bg-amber-500">Appointment Required</Badge>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            Phone
                          </h4>
                          <p className="text-sm">{location.phone}</p>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            Email
                          </h4>
                          <p className="text-sm">{location.email}</p>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            Website
                          </h4>
                          <a
                            href={location.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline flex items-center gap-1"
                          >
                            Visit Website
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-sm font-medium flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          Working Hours
                        </h4>
                        <p className="text-sm">{location.workingHours}</p>
                      </div>

                      {location.notes && (
                        <div className="p-3 rounded-md bg-muted/50">
                          <p className="text-sm">{location.notes}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View More Details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </DashboardShell>
  )
}
