export const Users = [
    {
        "tag": "greeting",
        "patterns": [ "Hi", "How are you", "Is anyone there?", "Hello", "Good day" ],
        "responses": [ "Hello, thanks for visiting", "Good to see you again", "Hi there, how can I help?" ],
        "context_set": ""
    },
    {
        "tag": "goodbye",
        "patterns": [ "Bye", "See you later", "Goodbye" ],
        "responses": [ "See you later, thanks for visiting", "Have a nice day", "Bye! Come back again soon." ]
    },
    {
        "tag": "thanks",
        "patterns": [ "Thanks", "Thank you", "That's helpful" ],
        "responses": [ "Happy to help!", "Any time!", "My pleasure" ]
    },
    {
        "tag": "hours",
        "patterns": [ "What hours are you open?", "What are your hours?", "When are you open?", "When is the time to contact ?", "At what time do you provide services ?" ],
        "responses": [ "We're open every day from 9AM to 9PM", "Our working hours are 9AM to 9PM every day" ]
    },
    {
        "tag": "location",
        "patterns": [ "What is your location?", "Where are you located?", "What is your address?", "Where is your company situated?", "How can we contact you ?", "How can I contact you?" ],
        "responses": [ "We are on BH-5, LPU", "Our company is situated in BH-5, LPU", "We work from BH-5 LPU", "Our location is BH-5 LPU"]
    },
    {
        "tag": "payments",
        "patterns": [ "Do you take credit cards?", "Do you accept Mastercard?", "Are you cash only?", "Which credit cards do you accept?" ],
        "responses": [ "We accept VISA, Mastercard and AMEX", "We accept most major credit cards" ]
    },
    {
        "tag": "services",
        "patterns": [ "What are the services that you provide?", "Which services do you provide?", "How can you help us?", "What can you do?" ],
        "responses": [ "We provide Web Penetration Testing,Android Penetration Testing,Docker Penetration Testing,Vulnerability Assessment,Cyber Crime investigation and many more services." ]
    },
    {
        "tag": "training",
        "patterns": [ "Do you provide industrial training?", "Do you deliver webinars on cybersecurity?", "Do you provide Summer training?", "Do you conduct workshops?" ],
        "responses": [ "Yes, we provide trainings in Cybersecurity", "Yes, we conduct workshops on Cybersecurity", "Yes, we conduct webinars on cybersecurity" ],
        "context_set": "training"
    },
    {
        "tag": "Cryptography",
        "patterns": [ "What is mean by cryptography?", "What is Cryptography?" ],
        "responses": [ "Cryptography is the practice and study of techniques for securing information and communication mainly to protect the data from third parties that the data is not intended for." ]
    },
    {
        "tag": "Firewall",
        "patterns": [ " What is a Firewall and why is it used?", "what is firewall?", "what firewall does?" ],
        "responses": [ "A Firewall is a network security system set on the boundaries of the system/network that monitors and controls network traffic. Firewalls are mainly used to protect the system/network from viruses, worms, malware, etc. Firewalls can also be to prevent remote access and content filtering." ]
    },
    {
        "tag": "Penetration Testing",
        "patterns": [ "What is Penetration Testing?", "explain Penetration Testing?", "What is  in cyber security?" ],
        "responses": [ "Penetration Testing is the process of finding vulnerabilities on the target. In this case, the organization would have set up all the security measures they could think of and would want to test if there is any other way that their system/network can be hacked." ]
    },
    {
        "tag": "Vulnerability Assessment",
        "patterns": [ "What is Vulnerability Assessment?", "explain Vulnerability Assessment?", "What is VA in cyber security?" ],
        "responses": [ "Vulnerability Assessment is the process of finding flaws on the target. Here, the organization knows that their system/network has flaws or weaknesses and want to find these flaws and prioritize the flaws for fixing." ]
    },
    {
        "tag": "traceroute",
        "patterns": [ "What is traceroute?", "explain traceroute?" ],
        "responses": [ "Traceroute is a tool that shows the path of a packet. It lists all the points (mainly routers) that the packet passes through. This is used mostly when the packet is not reaching its destination. Traceroute is used to check where the connection stops or breaks to identify the point of failure." ]
    },
    {
        "tag": "VPN",
        "patterns": [ "What is a VPN?", "explain vpn?", "why vpn is used?" ],
        "responses": [ "VPN stands for Virtual Private Network. It is used to create a safe and encrypted connection. When you use a VPN, the data from the client is sent to a point in the VPN where it is encrypted and then sent through the internet to another point. At this point, the data is decrypted and sent to the server. When the server sends a response, the response is sent to a point in the VPN where it is encrypted and this encrypted data is sent to another point in the VPN where it is decrypted. And finally, the decrypted data is sent to the client. The whole point of using a VPN is to ensure encrypted data transfer." ]
    },
    {
        "tag": "black hat hackers",
        "patterns": [ "what are black hat hackers?", "black hat hackers?" ],
        "responses": [ "Black hat hackers are known for having vast knowledge about breaking into computer networks. They can write malware which can be used to gain access to these systems. This type of hackers misuse their skills to steal information or use the hacked system for malicious purpose." ]
    },
    {
        "tag": "White hat hackers",
        "patterns": [ "what are White hat hackers?", "ethical hackers?" ],
        "responses": [ "White hat hackers use their powers for good deeds and so they are also called Ethical Hackers. These are mostly hired by companies as a security specialist that attempts to find and fix vulnerabilities and security holes in the systems. They use their skills to help make the security better. " ]
    },
    {
        "tag": "Grey hat hackers",
        "patterns": [ "what are Grey hat hackers ?", "Grey hat hackers?" ],
        "responses": [ "Grey hat hackers are an amalgamation of a white hat and black hat hacker. They look for system vulnerabilities without the owner�s permission. If they find any vulnerabilities, they report it to the owner. Unlike Black hat hackers, they do not exploit the vulnerabilities found." ]
    },
    {
        "tag": "ARP",
        "patterns": [ "What is an ARP and how does it work?", "what is ARP?", "arp in cyber security?" ],
        "responses": [ "Address Resolution Protocol (ARP)is a protocol for mapping an Internet Protocol address (IP address) to a physical machine address that is recognized in the local network. When an incoming packet destined for a host machine on a particular local area network arrives at a gateway, the gateway asks the ARP program to find a physical host or MAC address that matches the IP address." ]
    },
    {
        "tag": "Botnet",
        "patterns": [ "What is a Botnet?", "Bonet?" ],
        "responses": [ "A Botnet is a number of devices connected to the internet where each device has one or more bots running on it. The bots on the devices and malicious scripts used to hack a victim. Botnets can be used to steal data, send spams and execute a DDOS attack." ]
    },
    {
        "tag": "Secure Sockets Layers",
        "patterns": [ "ssl?", "explain ssl?", "What is ssl?" ],
        "responses": [ "SSL is meant to verify the sender's identity but it doesn�t search for anything more than that. SSL can help you track the person you are talking to but that can also be tricked at times." ]
    },
    {
        "tag": "Transport Layer Security",
        "patterns": [ "tls?", "explain tls?", "What is tls?" ],
        "responses": [ "TLS is also an identification tool just like SSL, but it offers better security features. It provides additional protection to the data and hence SSL and TLS are often used together for better protection." ]
    },
    {
        "tag": "Cognitive Cybersecurity",
        "patterns": [ "What is Cognitive Cybersecurity?", "explain Cognitive Cybersecurity?", "Cognitive Cybersecurity?" ],
        "responses": [ "Cognitive Cybersecurity is an application of AI technologies patterned on human thought processes to detect threats and protect physical and digital systems. Self-learning security systems use data mining, pattern recognition, and natural language processing to simulate the human brain, albeit in a high-powered computer model." ]
    },
    {
        "tag": "Encryption different from Hashing",
        "patterns": [ "How is Encryption different from Hashing?", "Encryption different from Hashing?" ],
        "responses": [ "Both Encryption and Hashing are used to convert readable data into an unreadable format. The difference is that the encrypted data can be converted back to original data by the process of decryption but the hashed data cannot be converted back to original data." ]
    },
    {
        "tag": "encryption",
        "patterns": [ "What is encryption?", "encryption?", "explain encryption?" ],
        "responses": [ "Encryption is a way of scrambling data so that only authorized parties can understand the information. In technical terms, it is the process of converting plaintext to ciphertext. In simpler terms, encryption takes readable data and alters it so that it appears random. Encryption requires the use of an encryption key: a set of mathematical values that both the sender and the recipient of an encrypted message know." ]
    },
    {
        "tag": "Decryption",
        "patterns": [ "What is Decryption?", "Decryption?", "explain Decryption?" ],
        "responses": [ "Decryption is the process of taking encoded or encrypted text or other data and converting it back into text that you or the computer can read and understand. This term could be used to describe a method of unencrypting the data manually or unencrypting the data using the proper codes or keys." ]
    },
    {
        "tag": "Hashing",
        "patterns": [ "What is Hashing?", "Hashing?", "explain Hashing?" ],
        "responses": [ "Hashing is an algorithm performed on data such as a file or message to produce a number called a hash. The hash is used to verify that data is not modified, tampered with, or corrupted. In other words, you can verify the data has maintained integrity." ]
    },
    {
        "tag": "cybersecurity",
        "patterns": [ "what is cybersecurity?", "cybersecurity?" ],
        "responses": [ "Cybersecurity refers to the protection of hardware, software, and data from attackers. The primary purpose of cyber security is to protect against cyberattacks like accessing, changing, or destroying sensitive information." ]
    },
    {
        "tag": "Forward Secrecy",
        "patterns": [ "What is forward secrecy?", "Forward Secrecy?" ],
        "responses": [ "Forward Secrecy is a system that uses ephemeral session keys to do the actual encryption of TLS data so that even if the server�s private key were to be compromised, an attacker could not use it to decrypt captured data that had been sent to that server in the past." ]
    },
    {
        "tag": "boot sector virus",
        "patterns": [ "what is boot sector virus?", "how boot sector virus effects?" ],
        "responses": [ "A boot sector virus is a type of virus that infects the boot sector of floppy disks or the Master Boot Record (MBR) of hard disks (some infect the boot sector of the hard disk instead of the MBR). ... While boot sector viruses infect at a BIOS level, they use DOS commands to spread to other floppy disks." ]
    },
    {
        "tag": "direct action virus",
        "patterns": [ "what is direct action virus?", "how direct action virus effects?" ],
        "responses": [ "A direct action virus is a type of file infector virus that works by attaching itself to an .exe or .com file when installed or executed. Once this occurs, the virus can spread to other existing files and can render them inaccessible." ]
    },
    {
        "tag": "resident virus",
        "patterns": [ "what is resident virus?", "how resident virus effects?" ],
        "responses": [ "A resident virus is a computer virus that stores itself within memory, allowing it to infect other files even when the originally infected program is no longer running." ]
    },
    {
        "tag": "multipartite virus",
        "patterns": [ "what is multipartite virus?", "how multipartite virus effects?" ],
        "responses": [ "A multipartite virus is a computer virus that's able to attack both the boot sector and executable files of an infected computer. If you're familiar with cyber threats, you probably know that most computer viruses either attack the boot sector or executable files." ]
    },
    {
        "tag": "spacefiller virus",
        "patterns": [ "what is spacefiller virus?", "how spacefiller virus effects?" ],
        "responses": [ "Alternatively referred to as a cavity virus, a spacefiller virus is a rare type of computer virus that attempts to install itself by filling in empty sections of a file. By only using empty sections of a file, the virus can infect a file without the size of the file changing, making it more difficult to detect." ]
    },
    {
        "tag": " file infector virus",
        "patterns": [ "Do you provide home delivery?", "Do you deliver the food?", "What are the home delivery options?" ],
        "responses": [ "A file infector virus attaches itself to executable programs, such as word processors, spreadsheet applications, and computer games. When the virus has infected a program, it propagates to infect other programs on the system, as well as other systems that use a shared infected program. " ]
    },
    {
        "tag": "computer virus",
        "patterns": [ "what is computer virus?", "What do you mean by computer virus?","Define Computer Virus" ],
        "responses": [ "A computer virus, much like a flu virus, is designed to spread from host to host and has the ability to replicate itself. Similarly, in the same way that flu viruses cannot reproduce without a host cell, computer viruses cannot reproduce and spread without programming such as a file or document." ]
    },
    {
        "tag": "Features of a Cybersecurity",
        "patterns": [ "Important Features of a Cybersecurity?", "Why we need CyberSecurity ?", "Whta are features of CyberSecurity?" ],
        "responses": [ "1.Good Analytics, 2.Coverage of your biggest external threats, 3.A defense against internal threats, 4.Compliance, 5.Manage risk across your entire ecosystem, 6.Threat prevention, detection, and response, 7.Continuous monitoring" ]
    },
    {
        "tag": "Benefits of cybersecurity",
        "patterns": [ "What are the Benefits of cybersecurity?", "uses of cyber security?" ],
        "responses": [ "1.Business protection against malware, ransomware, phishing and social engineering, 2.Protection for data and networks, 3.Prevention of unauthorized users, 4.Improves recovery time after a breach, 5.Protection for end-users" ]
    }
]