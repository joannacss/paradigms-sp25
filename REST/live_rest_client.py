import requests
import csv
HOST = "http://jcssdev.pythonanywhere.com/"


with open("bugs.csv", "w") as f:
	next_page = HOST + "bugs"
	while next_page:
		csv_writer = csv.writer(f, delimiter=",", quotechar="'", lineterminator="\n")
		response = requests.get(next_page)

		json_resp = response.json()
		csv_writer.writerow(["bug_id", "status", "package", "summary"])

		for bug in json_resp["results"]:
			bug_id = bug["id"]
			status = bug["status"]
			package = bug["package"]
			summary = bug["summary"]
			csv_writer.writerow([ bug_id, status, package, summary])

		next_page = json_resp["next"]
