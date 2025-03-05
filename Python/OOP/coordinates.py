import json
import math
from abc import ABC, abstractmethod
from pathlib import Path


class Location:
    """
    Represents a location on the Earth's surface (latitude and longitude).
    """

    def __init__(self, lat: float, lng: float):
        self.latitude = lat
        self.longitude = lng

    def __str__(self):
        return f"({self.latitude}, {self.longitude})"


# abstract class, used to save coordinates in a document
# meant to just specify the operations
class Document(ABC):
    """
    Represents a document that can save a list of coordinates.
    """
    ND_CAMPUS = Location(41.7031, -86.2390) # static

    def __init__(self, filepath: str):
        self.filepath = Path(filepath)

    @abstractmethod
    def save(self, coordinates: list[Location]):
        pass

    @staticmethod
    def distance(loc1: Location) -> float:
        """
        Compute the great-circle distance between two points on Earth (in kilometers).
        """
        # Convert decimal degrees to radians
        lat1_rad = math.radians(loc1.latitude)
        lon1_rad = math.radians(loc1.longitude)
        lat2_rad = math.radians(Document.ND_CAMPUS.latitude)
        lon2_rad = math.radians(Document.ND_CAMPUS.longitude)

        # Haversine formula
        dlat = lat2_rad - lat1_rad
        dlon = lon2_rad - lon1_rad
        a = (math.sin(dlat / 2) ** 2) + math.cos(lat1_rad) * math.cos(lat2_rad) * (math.sin(dlon / 2) ** 2)
        c = 2 * math.asin(math.sqrt(a))

        # Calculate the distance (assuming earth radius of 6371 km)
        return 6371 * c


class CsvDocument(Document):
    def save(self, coordinates: list[Location]):
        with open(self.filepath, "w") as csv_file:
            csv_file.write(f"latitude\tlongitude\tdistance_to_campus\n")
            for c in coordinates:
                csv_file.write(f"{c.latitude}\t{c.longitude}\t{Document.distance(c)}\n")


class JsonDocument(Document):
    def save(self, coordinates: list[Location]):
        as_dict = [{"latitude": x.latitude, "longitude": x.longitude, "distance_to_campus": Document.distance(x)}
                   for x in coordinates]
        json_object = json.dumps(as_dict, indent=4)
        with open(self.filepath, "w") as json_file:
            json_file.write(json_object)


london = Location(51.507351, -0.127758)
chicago = Location(41.878113, -87.629799)
south_bend = Location(1.676388, -86.250275)

d = CsvDocument("coordinates.csv")
d.save([london, chicago, south_bend])
