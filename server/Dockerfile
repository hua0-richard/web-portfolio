FROM python:3.9
WORKDIR /server-app
RUN pip3 install fastapi uvicorn
RUN pip3 install pymongo
RUN pip3 install requests
COPY ./app /app
EXPOSE 8000
CMD ["./run.sh"]
