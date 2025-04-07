import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold">Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-pine-green hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:text-pine-green hover:underline underline-offset-4"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:text-pine-green hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Shruti Nagpure
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">Software Engineer</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-pine-green hover:bg-pine-green/90 text-white" asChild>
                  <Link href="#contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-pine-green text-pine-green hover:bg-pine-green/10" asChild>
                  <Link href="#projects">View My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-pine-green px-3 py-1 text-sm text-white">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Hi, I'm Shruti. Your Software problem solver.
                </h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a Software Engineer with a passion for developing scalable systems. With over 4 years of
                  experience in Software development, I specialize in building scalable backend applications using Java,
                  AWS, Python, JavaScript, and other cutting-edge technologies.
                </p>
              </div>
              <div className="space-y-4">
                <Tabs defaultValue="skills" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                    <TabsTrigger
                      value="skills"
                      className="data-[state=active]:bg-pine-green data-[state=active]:text-white"
                    >
                      Skills
                    </TabsTrigger>
                    <TabsTrigger
                      value="experience"
                      className="data-[state=active]:bg-pine-green data-[state=active]:text-white"
                    >
                      Experience
                    </TabsTrigger>
                    <TabsTrigger
                      value="education"
                      className="data-[state=active]:bg-pine-green data-[state=active]:text-white"
                    >
                      Education
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="skills" className="mt-4">
                    <h3 className="text-xl font-bold mb-4">My Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Java</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">JavaScript</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">C++</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">C#</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">TypeScript</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Python</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">SQL</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Shell Scripting</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Data Structures</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">HTML5</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">CSS3</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Spring Boot</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">.Net</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Struts</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Hibernate</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Angular 2+</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">NodeJs</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">React</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Kafka</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Swagger</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Redis</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">AWS</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Bitbucket</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Jira</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Jenkins</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Kubernetes</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Docker</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Git</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Maven</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Splunk</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Postman</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Gradle</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">IntelliJ</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Tomcat</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">MySQL</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">MongoDB</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">Oracle</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">JPA</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">NoSQL</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">DynamoDB</Badge>
                      <Badge className="bg-pine-green text-white hover:bg-pine-green/90">PostgreSQL</Badge>
                    </div>
                  </TabsContent>
                  <TabsContent value="experience" className="mt-4 space-y-6">
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>

                    <div className="border-l-2 border-pine-green pl-4 space-y-8">
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-pine-green"></div>
                        <div>
                          <h4 className="text-lg font-semibold">Software Developer</h4>
                          <p className="text-pine-green font-medium">Gallup Inc.</p>
                          <p className="text-sm text-gray-400">Jan 2023 - Aug 2024</p>
                          <p className="mt-2 text-gray-400">
                            Designed and implemented key functionalities for Gallup Analytics and Reporting (GAR)
                            Platform using Java, AWS Technologies.
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-pine-green"></div>
                        <div>
                          <h4 className="text-lg font-semibold">Software Engineer</h4>
                          <p className="text-pine-green font-medium">Tata Consultancy Services Pvt. Ltd.</p>
                          <p className="text-sm text-gray-400">Jul 2018 - Jul 2021</p>
                          <p className="mt-2 text-gray-400">
                            Developed and maintained a banking system using Angular2+, Java, Spring Boot, Microservices
                            to create secure and scalable web applications.
                          </p>
                        </div>
                      </div>

                     
                    </div>
                  </TabsContent>
                  <TabsContent value="education" className="mt-4 space-y-6">
                    <h3 className="text-xl font-bold mb-4">Education & Internships</h3>

                    <div className="border-l-2 border-pine-green pl-4 space-y-8">
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-pine-green"></div>
                        <div>
                          <h4 className="text-lg font-semibold">Master of Science in Computer Science</h4>
                          <p className="text-pine-green font-medium">University of North Carolina at Charlotte</p>
                          <p className="text-sm text-gray-400">Aug 2021 - May 2023</p>
                          <p className="mt-2 text-gray-400">Graduated with a 3.8 GPA.</p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-pine-green"></div>
                        <div>
                          <h4 className="text-lg font-semibold">Bachelor of Science in Computer Engineering</h4>
                          <p className="text-pine-green font-medium">University of Mumbai,India</p>
                          <p className="text-sm text-gray-400">Jun 2015 - May 2018</p>
                          <p className="mt-2 text-gray-400">Graduated with a 7.4 GPA.</p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-pine-green"></div>
                        <div>
                          <h4 className="text-lg font-semibold">Graduate Teaching Assistant</h4>
                          <p className="text-pine-green font-medium">University of North Carolina at Charlotte</p>
                          <p className="text-sm text-gray-400">Aug 2022-May 2023</p>
                          <p className="mt-2 text-gray-400">
                            Courses:  Web-Based Application Design and Development and Knowledge Database Discovery.
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-pine-green"></div>
                        <div>
                          <h4 className="text-lg font-semibold"> Graduate Research Assistant</h4>
                          <p className="text-pine-green font-medium">University of North Carolina at Charlotte</p>
                          <p className="text-sm text-gray-400">Jun 2022 - Aug 2022</p>
                          <p className="mt-2 text-gray-400">
                            Implemented deployment strategy on AWS with python lambda's and linux environment for the
                            data analytics project.
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-pine-green"></div>
                        <div>
                          <h4 className="text-lg font-semibold">Mobile Application Intern</h4>
                          <p className="text-pine-green font-medium">Trinity IT services Pvt. Ltd.</p>
                          <p className="text-sm text-gray-400">May 2015 - Jul 2015</p>
                          <p className="mt-2 text-gray-400">
                            Developed and launched an innovative educational app named as 99Pencils using mobile
                            development with Java and Firebase, achieving ~ 10,000 downloads on the Play Store.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pine-green px-3 py-1 text-sm text-white">Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Recent Work</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I've worked on recently.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Movie Plot Bot Card */}
              <Card className="bg-gray-900 border-gray-800 text-white transition-colors">
                <CardHeader>
                  <CardTitle>Movie Plot Bot</CardTitle>
                  <CardDescription className="text-gray-400">
                    A Movie chatbot RAG application to answer questions related to movie Plots.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <img
                      alt="Project thumbnail"
                      className="aspect-video overflow-hidden rounded-lg object-cover"
                      height="225"
                      src="/Logo_of_Github.jpg?height=225&width=400"
                      width="400"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Python
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    LLM
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    RAG
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    ChromaDB
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Embeddings
                  </Badge>
                  <div className="w-full mt-4">
                    <Button 
                      className="w-full bg-pine-green hover:bg-pine-green/90 text-white" 
                      asChild
                    >
                      <Link 
                        href=" https://www.kaggle.com/code/shrutinagpure4/moviebot" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Music Trading System */}
              <Card className="bg-gray-900 border-gray-800 text-white transition-colors">
                <CardHeader>
                  <CardTitle>Music Trading System</CardTitle>
                  <CardDescription className="text-gray-400">
                   A website where user can trade the music album.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <img
                      alt="Project thumbnail"
                      className="aspect-video overflow-hidden rounded-lg object-cover"
                      height="225"
                      src="/Logo_of_Github.jpg?height=225&width=400"
                      width="400"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Express
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    HTML
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    CSS
                  </Badge>
                  <div className="w-full mt-4">
                    <Button 
                      className="w-full bg-pine-green hover:bg-pine-green/90 text-white" 
                      asChild
                    >
                      <Link 
                        href="https://github.com/shrutinag04/Music-Trading-system/blob/main/NagpureShrutiProject1iInfo.docx" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Movie Review Sentiment analysis */}
              <Card className="bg-gray-900 border-gray-800 text-white transition-colors">
                <CardHeader>
                  <CardTitle>Movie Review Sentiment</CardTitle>
                  <CardDescription className="text-gray-400">
                  A system to analyze movie review sentiment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <img
                      alt="Project thumbnail"
                      className="aspect-video overflow-hidden rounded-lg object-cover"
                      height="225"
                      src="/Logo_of_Github.jpg?height=225&width=400"
                      width="400"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Streamlit
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Gemini
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Prompt Engineering
                  </Badge>
                  <div className="w-full mt-4">
                    <Button 
                      className="w-full bg-pine-green hover:bg-pine-green/90 text-white" 
                      asChild
                    >
                      <Link 
                        href="https://moviereview-sentiment-analysis-rycmz2m32pagvz24dntawm.streamlit.app/?" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              {/* Auto Complete System */}
              <Card className="bg-gray-900 border-gray-800 text-white transition-colors">
                <CardHeader>
                  <CardTitle>Auto Complete System</CardTitle>
                  <CardDescription className="text-gray-400">
                  An auto completion api system add, search, list of all the matched suggestions for the given letter or word.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <img
                      alt="Project thumbnail"
                      className="aspect-video overflow-hidden rounded-lg object-cover"
                      height="225"
                      src="/Logo_of_Github.jpg?height=225&width=400"
                      width="400"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Java
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Spring Boot
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    REST API
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Data Structures
                  </Badge>
                  <div className="w-full mt-4">
                    <Button 
                      className="w-full bg-pine-green hover:bg-pine-green/90 text-white" 
                      asChild
                    >
                      <Link 
                        href="https://github.com/shrutinag04/AutoComplete" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              {/* Facial Recognition API */}
              <Card className="bg-gray-900 border-gray-800 text-white transition-colors">
                <CardHeader>
                  <CardTitle>Facial Recognition API</CardTitle>
                  <CardDescription className="text-gray-400">
                  An easy to integrate Node JS API to detect faces.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <img
                      alt="Project thumbnail"
                      className="aspect-video overflow-hidden rounded-lg object-cover"
                      height="225"
                      src="/Logo_of_Github.jpg?height=225&width=400"
                      width="400"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Node JS
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Swagger
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Azure Face API
                  </Badge>
                  <div className="w-full mt-4">
                    <Button 
                      className="w-full bg-pine-green hover:bg-pine-green/90 text-white" 
                      asChild
                    >
                      <Link 
                        href="https://github.com/shrutinag04/AzureFaceAPI/blob/main/Readme.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              {/* Scalable Microservices */}
              <Card className="bg-gray-900 border-gray-800 text-white transition-colors">
                <CardHeader>
                  <CardTitle>Scalable Microservices</CardTitle>
                  <CardDescription className="text-gray-400">
                  A scalable currency exchange microservice.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <img
                      alt="Project thumbnail"
                      className="aspect-video overflow-hidden rounded-lg object-cover"
                      height="225"
                      src="/Logo_of_Github.jpg?height=225&width=400"
                      width="400"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Spring Boot
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Java
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    API Gateway
                  </Badge>
                  <Badge variant="outline" className="border-pine-green text-pine-green">
                    Load Balancer
                  </Badge>
                  <div className="w-full mt-4">
                    <Button 
                      className="w-full bg-pine-green hover:bg-pine-green/90 text-white" 
                      asChild
                    >
                      <Link 
                        href="https://github.com/shrutinag04/Microservice/blob/main/currency-conversion-service/src/main/java/com/example/microservices/currency_conversion_service/CurrencyConversionController.java" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pine-green px-3 py-1 text-sm text-white">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get In Touch</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                <Button className="gap-1 bg-pine-green hover:bg-pine-green/90 text-white" asChild>
                  <Link href="mailto:john@example.com">
                    <Mail className="h-4 w-4" />
                    Shruti.nagpure04@gmail.com
                  </Link>
                </Button>
                <Button className="gap-1 bg-pine-green hover:bg-pine-green/90 text-white" asChild>
                  <Link href="https://github.com/shrutinag04" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button className="gap-1 bg-pine-green hover:bg-pine-green/90 text-white" asChild>
                  <Link href="https://www.linkedin.com/in/shruti-nagpure04/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">&copy; 2025 Shruti Nagpure. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-gray-400 hover:text-pine-green hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-xs text-gray-400 hover:text-pine-green hover:underline underline-offset-4"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-xs text-gray-400 hover:text-pine-green hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

