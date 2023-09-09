from django.shortcuts import render
from markdown2 import Markdown
import random as rnd

from . import util


def index(request):
    return render(request, "encyclopedia/index.html", {
        "entries": util.list_entries()
    })

def entry(request ,title):
    """displays the entry page entered by user if it is valid"""
    #wrong entry by client(or page is not found)
    if not util.get_entry(title):
        return render(request ,"encyclopedia/404.html" )
    #page is found
    entry_md = util.get_entry(title)
    content = Markdown().convert(entry_md)
    return render(request ,"encyclopedia/entry.html", {"title":title,
                                                       "entry":content,})

def search(request):
        #getting data
        query = request.POST['q']
        #checking if what user typed is correct
        if util.get_entry(query) is not None :
        #if what user types is valid/entry available redirect then there-- asssumning entry was found
            entry_md = util.get_entry(query)
            content = Markdown().convert(entry_md)
            return render(request ,"encyclopedia/entry.html", {"title":query,
                                                        "entry":content,})
        #checking if something match with the users query
        entries_all= util.list_entries()
        match = []
        #itereate over all the strings inside the individual elements of the list
        for entry in entries_all:
            if query.lower() in entry.lower():
                match.append(entry)
        return render(request , "encyclopedia/search.html" ,{"results":match} )
    
def new(request):
    if request.method == "GET":
        return render(request ,"encyclopedia/new.html")
    #if user posted something 
    else:
        title = request.POST['title']
        content = request.POST['content']
        if util.get_entry(title) is None:
            # meaning client is making a new entry
            util.save_entry(title, content)
            entry_md = util.get_entry(title)
            content = Markdown().convert(entry_md)
            return render(request ,"encyclopedia/entry.html", {"title":title,
                                                            "entry":content,})
        else:
            return render(request , "encyclopedia/error.html")
        
def edit(request):
    title = request.POST['title_entry']
    # not doing server side validation of title as it was done in time of making a new entry
    content = util.get_entry(title)
    return render(request ,"encyclopedia/edit.html" ,{"title" : title , "content" : content})

def save(request):
    if request.method =="POST":
        title = request.POST['title']
        content = request.POST['content']
        util.save_entry(title, content)
        return render(request , "encyclopedia/entry.html", {"title":title,
                                                        "entry":content,} )
    
def random(request):
    #chooses a random entry from available entries
    total = util.list_entries()
    random_entry = rnd.choice(total)
    entry_md = util.get_entry(random_entry)
    content = Markdown().convert(entry_md)
    return render(request , "encyclopedia/entry.html", {"title":random_entry,
                                                        "entry":content,})