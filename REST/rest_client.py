from requests.auth import HTTPBasicAuth
import requests
import csv


URL = "http://jcssdev.pythonanywhere.com/"




	


# parses the list of bugs
def parse_bugs(bugs, csv_writer):	
	for b in bugs:
		csv_writer.writerow([b["id"], b["package"], b["status"], b["summary"]])
	


# parses the list of bugs
def parse_comments(comments, csv_writer):	
	for c in comments:
		csv_writer.writerow([c["id"], c["bug"], c["user"], c["content"]])




def visit_url(resource, callback):
	# open file
	with open(f"{resource}.csv", "w", newline='', encoding="utf8") as csvfile:
		csv_writer = csv.writer(csvfile, delimiter=',',quotechar='"')
		csv_writer.writerow(["id","package","status","summary"])

		# composes request URL
		url = URL + resource
		# while the `next` page to visit is not None
		while url:
			print(url)
			# HTTP request without authentication
			response = requests.get(url)
			if response:
				# parse the response to JSON
				json_resp = response.json()
				# get the next page
				url = json_resp["next"] 
				# parse the returned user information
				callback(json_resp["results"], csv_writer)
			else:
				url = None

def main():
	visit_url("bugs", parse_bugs)
	visit_url("comments", parse_comments)
	


if __name__ == '__main__':
	main()