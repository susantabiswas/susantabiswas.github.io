import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
	projects = [
		{
			"id": 1,
			"title": "Realtime Facial Recognition",
			"intro": "Realtime Facial recognition system using Siamese neural network",
			"description": "Face Recognition system using Siamese Neural network. The model is based on the FaceNet model. OpenCV implementaion has been done for realtime face detection and recognition using the network. The model uses face encodings for identifying users. Demo is available <a href='https://www.youtube.com/embed/5wv5JG_THxk'>here</a>",
			"url": "https://susantabiswas.github.io/FaceRecog/",
			"img_url": "../../../assets/projects/face-recog/1.gif" 
		},
		{
			"id": 2,
			"title": "Facial keypoint regression",
			"intro": "Facial keypoints detection using 15 landmark points on human face",
			"description": "Keypoint detection problem is a regression problem where we predict the coordinates for the landmarks on the face which are real numbers. Detection of facial keypoints is very useful for a number of tasks like facial recognition, detection etc. The keypoints selected in this code uses 15 keypoints representing the various coordinates on the human face.",
			"url": "https://susantabiswas.github.io/facial-keypoint-regression/",
			"img_url": "../../../assets/projects/regression-keypoint/1.jpg" 
		},
		{
			"id": 3,
			"title": "Word prediction using n-gram Probabilistic model",
			"intro": "Next Word Prediction using n-gram Probabilistic Model with various Smoothing Techniques",
			"description": "Next Word Prediction using n-gram Probabilistic Model with various Smoothing Techniques",
			"url": "https://susantabiswas.github.io/Word-Prediction-Ngram/",
			"img_url": ""
		},
		{
			"id": 4,
			"title": "Stackoverflow question tagger",
			"intro": "Predict topic tags for StackOverflow questions",
			"description": "StackOverflow lets the users to post their queries and the other users can help them with answers. The site uses tags for managing the questions effectively. Here we will be predicting tags for a given question. Tags like C, C++, Python are widely used. This model can predict appropriate topic tags for a variety of StackOverflow questions.",
			"url": "https://susantabiswas.github.io/stackoverflow-question-tagger/",
			"img_url": ""
		},
		{
			"id": 5,
			"title": "Image Summarization",
			"intro": "Caption generation or image summarization for images using LSTM network. Implementation done in keras.",
			"description": "Image summary generation or caption generation for images using CNN-LSTM network. The model used MSCOCO dataset for training the model. The entire implementation is done in Keras.",
			"url": "https://susantabiswas.github.io/image-summarizer/",
			"img_url": "../../../assets/projects/image-summarization/1.jpg" 
		},
		{
			"id": 6,
			"title": "Parts of Speech Tagger",
			"intro": "Part of Speech Tagger for language strings using Bidirectional LSTM network.",
			"description": "Code for neural network that can tag POS in an English sentence. There are many POS tagsets available, here universal tagset has been used. The model converts the sentence to POS tags.",
			"url": "https://susantabiswas.github.io/POS-tagger/",
			"img_url": ""
		},
		{
			"id": 7,
			"title": "Realtime Facial emotion Analyzer",
			"intro": "Human Emotion Analysis using facial expressions in real-time from webcam feed.",
			"description": "Realtime Human Emotion Analysis From facial expressions. It uses a deep Convolutional Neural Network. The model used achieved an accuracy of 63% on the test data. The realtime analyzer assigns a suitable emoji for the current emotion.",
			"url": "https://susantabiswas.github.io/facial-emotion-analyzer/",
			"img_url": "../../../assets/projects/facial-emotion/1.JPG"  
		},
		{
			"id": 8,
			"title": "Similar question finder",
			"intro": "Find similar questions amongst a bunch of questions using word embeddings.",
			"description": "Find similar questions using word embeddings. Here we use Google's 300 dimensional word embeddings.",
			"url": "https://susantabiswas.github.io/similar-question-finder/",
			"img_url": ""
		},
		{
			"id": 9,
			"title": "Name generation using RNN",
			"intro": "Indian names generation using RNN. This model was trained for generating indian names. Made using keras.",
			"description": "Indian name generation using Gated Recurrent units. It uses a character level language model for this task.",
			"url": "https://susantabiswas.github.io/Name-Gen-RNN/",
			"img_url": ""
		},
		{
			"id": 10,
			"title": "Data structures  and Algorithms solutions",
			"intro": "Solution codes for 400+ algorithms and data structure problems.",
			"description": "Solution codes for 400+ algorithms and data structure problems. Most common and famous placement questions from Data Structures and Algorithms.",
			"url": "https://susantabiswas.github.io/InterviewPrep/",
			"img_url": ""
		},
		{
			"id": 11,
			"title": "Web based facial Authentication system",
			"intro": "Web based facial Authentication system with flask server",
			"description": "This is a web based facial log in/ Sign up website which uses Facial recognition for user authentication. It uses flask server for running the keras neural network model. The model runs on the server side and accepts requests from clients. Facial recognition is based on Facenet model.",
			"url": "https://susantabiswas.github.io/facial-login-web/",
			"img_url": "../../../assets/projects/facial-login-web/1.jpg" 
		},
		{
			"id": 12,
			"title": "Neural Date translator",
			"intro": "Machine Translation for conventional dates",
			"description": "Date translation from conventional Human readable format to machine readable format(YYYY-MM-DD) using Neural Machine Translation. For example a date in human readable format can be : 'sunday 15 september 2013', '29-oct-1997' or '30 august 1985' etc. The task is to convert this to a more normalized format like YYYY-MM-DD.",
			"url": "https://susantabiswas.github.io/Neural-Date-Translator/",
			"img_url": ""
		},
		{
			"id": 13,
			"title": "Code Snippet Manager",
			"intro": "Code Snippet Manager written in C# that can be used to store and manage code snippets.",
			"description": "Code Snippet Manager written in C# that can be used to store and manage code snippets.Also has a in-built text editor to modify and write snippets.",
			"url": "https://github.com/susantabiswas/Code-Snippet-Manager",
			"img_url": ""
		},
		{
			"id": 14,
			"title": "English to French Translation using NMT",
			"intro": "Sequence to sequence model for Language translation from English to French",
			"description": "Sequence to sequence model for Language translation from English to French. This model uses an Encoder-Decoder with LSTM cells.",
			"url": "https://susantabiswas.github.io/Neural-Language-Translator/",
			"img_url": "../../../assets/projects/language-translator/1.JPG" 
		},
		{
			"id": 15,
			"title": "Word Analogy",
			"intro": "Finding word analogies using GLoVe word embeddings",
			"description": "Finding word analogies using GLoVe word embeddings. In the word analogy task, we have 'a is to b as c is to __'. For example is 'boy is to girl as king is to queen' .",
			"url": "https://susantabiswas.github.io/Word-Analogy/",
			"img_url": ""
		},
		{
			"id": 16,
			"title": "Voice Assistant",
			"intro": "A RNN based voice application which can do tasks when it recognizes the user speaking the Trigger word. Here the trigger word is 'activate'.",
			"description": "A voice based assistant application which executes the assigned command on detecting the trigger word from the user voice. A trigger word is a word to which the model gets triggered once it detects it. Like for example 'Hey Cortana' or 'Ok Google'. Here the trigger word used is 'activate'. The Model used for detecting trigger word uses a deep Recurrent Neural Network with Gated Recurrent Units (GRU).",
			"url": "https://susantabiswas.github.io/TriggerWordAssistant/",
			"img_url": ""
		},
		{
			"id": 17,
			"title": "Convert phrase to emoji",
			"intro": "Deep RNN for expressing english phrases with emoji.",
			"description": "Express your words with the power of Emoji. Using a deep LSTM network the model associates an english input sentence with an emoji.",
			"url": "https://susantabiswas.github.io/DeepEmoji/",
			"img_url": ""
		},
		{
			"id": 18,
			"title": "Classic snake game",
			"intro": "Classic Snake Game written in C#",
			"description": "Classic Snake Game written in C# using Windows Form.In this version,basic Game Screen Interface is there , SQLite has been used for storing the High Score .",
			"url": "http://susantabiswas.github.io/Snake-Game/",
			"img_url": ""
		},
		{
			"id": 19,
			"title": "Live HTML editor",
			"intro": "HTML Viewer that shows the Web View of the Page simultaneously as the HTML code  is being written on the side Pane Window.",
			"description": "HTML Viewer that shows the Web View of the Page simultaneously as the HTML code is being written on the side Pane Window.The application is written in C# using Windows Forms and .NET framework.",
			"url": "http://susantabiswas.github.io/HTML-Viewer/",
			"img_url": ""
		},
		{
			"id": 20,
			"title": "Multitab Text Editor",
			"intro": "A simple multitab Text Editor written in C#",
			"description": "This is a multi-tab Editor with basic features written in C#.It has GUI and is made using Windows Forms.",
			"url": "http://susantabiswas.github.io/HTML-Viewer/",
			"img_url": ""
		}
	]


	constructor() { }

	createArray(num: number){
		return new Array(num);
	}

	ngOnInit() {
	}

}
