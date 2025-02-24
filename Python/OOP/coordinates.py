import json
from abc import ABC, abstractmethod


class Location:
    def __init__(self, lat, lng):
        self.latitute = lat
        self.longitude = lng

    def __str__(self):
        return f"({self.latitute}, {self.longitude})"


# abstract class, used to save coordinates in a document
# meant to just specify the operations
class Document(ABC):
    def __init__(self, filepath):
        self.filepath = filepath

    @abstractmethod
    def save(self, coordinates):
        pass


class CsvDocument(Document):
    def save(self, coordinates):
        with open(self.filepath, "w") as csv_file:
            csv_file.write(f"latitute\tlongitude\n")
            for c in coordinates:
                csv_file.write(f"{c.latitute}\t{c.longitude}\n")


class JsonDocument(Document):
    def save(self, coordinates):
        as_dict = [{"latitute": x.latitute, "longitude": x.longitude} for x in coordinates]
        json_object = json.dumps(as_dict, indent=4)
        with open(self.filepath, "w") as json_file:
            json_file.write(json_object)


london = Location(51.507351, -0.127758)
chicago = Location(41.878113, -87.629799)
south_bend = Location(1.676388, -86.250275)

d = Document("document.txt")
d.save([london, chicago, south_bend])
