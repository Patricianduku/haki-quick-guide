import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { FileText, Clock, Users, CheckCircle, ArrowRight, Download, BookOpen } from "lucide-react";

const LegalGuides = () => {
  const navigate = useNavigate();
  const [selectedGuide, setSelectedGuide] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const guides = [
    {
      title: "Land Disputes Resolution",
      description: "Step-by-step guide to resolving land ownership conflicts in Kenya",
      category: "Property Law",
      readTime: "15 min",
      difficulty: "Intermediate",
      steps: 8,
      popular: true,
      detailedSteps: [
        {
          step: 1,
          title: "Document Your Claim",
          description: "Gather all relevant documents including title deeds, survey maps, and any agreements related to the land.",
          details: "Start by collecting your title deed, survey map, and any purchase agreements. Make copies of all documents and keep originals safe."
        },
        {
          step: 2,
          title: "Consult a Surveyor",
          description: "Hire a licensed surveyor to verify the boundaries and create an official survey report.",
          details: "Contact a registered surveyor to conduct a boundary survey. This will provide official documentation of the current state of the land."
        },
        {
          step: 3,
          title: "Attempt Mediation",
          description: "Try to resolve the dispute through local mediation or community elders first.",
          details: "Approach local elders, community leaders, or use government mediation services to try resolving the dispute amicably."
        },
        {
          step: 4,
          title: "File with Land Registrar",
          description: "Submit your complaint to the local land registrar's office with supporting documents.",
          details: "Visit your local land registry office with copies of all documents and file an official complaint about the boundary dispute."
        },
        {
          step: 5,
          title: "Engage Legal Counsel",
          description: "Hire a lawyer specializing in land law to represent your interests.",
          details: "Find a lawyer with experience in land disputes. Many offer free initial consultations to assess your case."
        },
        {
          step: 6,
          title: "Alternative Dispute Resolution",
          description: "Participate in ADR processes like arbitration or mediation through legal channels.",
          details: "Consider arbitration or formal mediation through the courts or private ADR centers before going to trial."
        },
        {
          step: 7,
          title: "Court Proceedings",
          description: "If mediation fails, file a case in the Environment and Land Court.",
          details: "File your case in the Environment and Land Court. Be prepared for multiple hearings and potential delays."
        },
        {
          step: 8,
          title: "Enforcement",
          description: "Once judgment is given, ensure proper enforcement of the court's decision.",
          details: "If you win the case, work with court officials to enforce the judgment, including boundary marking and title updates."
        }
      ],
      resources: [
        "Land Registration Act, 2012",
        "Survey Act, Cap 299",
        "Environment and Land Court Act, 2011"
      ]
    },
    {
      title: "Employment Rights Protection", 
      description: "Know your rights as an employee and how to file complaints",
      category: "Labor Law",
      readTime: "12 min", 
      difficulty: "Beginner",
      steps: 6,
      popular: true,
      detailedSteps: [
        {
          step: 1,
          title: "Know Your Rights",
          description: "Understand your basic employment rights under Kenyan law.",
          details: "Familiarize yourself with the Employment Act, 2007 which covers working hours, leave, termination, and minimum wage."
        },
        {
          step: 2,
          title: "Document Everything",
          description: "Keep detailed records of your employment, including contracts, payslips, and communications.",
          details: "Maintain copies of your employment contract, payslips, performance reviews, and any written communications with your employer."
        },
        {
          step: 3,
          title: "Internal Grievance",
          description: "Follow your company's internal grievance procedure first.",
          details: "Submit a formal written complaint to your immediate supervisor or HR department following company procedures."
        },
        {
          step: 4,
          title: "Contact Labor Office",
          description: "Report violations to the nearest labor office for investigation.",
          details: "Visit your local labor office with evidence of the violation. They can investigate and mediate the dispute."
        },
        {
          step: 5,
          title: "File with Industrial Court",
          description: "If mediation fails, file a case with the Employment and Labor Relations Court.",
          details: "Submit your case to the Employment and Labor Relations Court. You can represent yourself or hire a lawyer."
        },
        {
          step: 6,
          title: "Follow Up",
          description: "Attend all hearings and follow up on the court's decision.",
          details: "Attend all scheduled hearings and ensure you understand the court's decision and any required actions."
        }
      ],
      resources: [
        "Employment Act, 2007",
        "Labor Relations Act, 2007",
        "Work Injury Benefits Act, 2007"
      ]
    },
    {
      title: "Police Harassment Response",
      description: "Legal steps to take when facing police misconduct or harassment",
      category: "Civil Rights",
      readTime: "10 min",
      difficulty: "Beginner", 
      steps: 5,
      popular: false,
      detailedSteps: [
        {
          step: 1,
          title: "Stay Calm and Document",
          description: "Remain calm and document the incident with as much detail as possible.",
          details: "Write down the officer's name, badge number, time, location, and what happened. Take photos if safe to do so."
        },
        {
          step: 2,
          title: "Get Witnesses",
          description: "Collect contact information from any witnesses present.",
          details: "Ask bystanders for their names and phone numbers. Their testimony can be crucial in your case."
        },
        {
          step: 3,
          title: "Seek Medical Attention",
          description: "If injured, seek immediate medical attention and document all injuries.",
          details: "Go to a hospital or clinic immediately if injured. Keep all medical records and receipts."
        },
        {
          step: 4,
          title: "File Official Complaint",
          description: "Submit a formal complaint to the Independent Policing Oversight Authority (IPOA).",
          details: "Contact IPOA through their website or visit their office. Provide all documentation and evidence."
        },
        {
          step: 5,
          title: "Legal Action",
          description: "Consider filing a civil lawsuit for damages if the harassment was severe.",
          details: "Consult with a civil rights lawyer about filing a lawsuit for compensation and to hold the officer accountable."
        }
      ],
      resources: [
        "National Police Service Act, 2011",
        "IPOA Act, 2011",
        "Constitution of Kenya, 2010 (Bill of Rights)"
      ]
    },
    {
      title: "Family Court Procedures",
      description: "Navigate divorce, custody, and maintenance cases effectively",
      category: "Family Law",
      readTime: "20 min",
      difficulty: "Advanced",
      steps: 12,
      popular: false,
      detailedSteps: [
        {
          step: 1,
          title: "Consultation",
          description: "Meet with a family law attorney to understand your options and rights.",
          details: "Schedule a consultation with a family law specialist to discuss your specific situation and legal options."
        },
        {
          step: 2,
          title: "Gather Documents",
          description: "Collect all relevant financial and personal documents.",
          details: "Gather marriage certificate, birth certificates, financial records, property documents, and any existing agreements."
        },
        {
          step: 3,
          title: "Attempt Reconciliation",
          description: "Consider counseling or mediation before proceeding with divorce.",
          details: "Many courts require attempts at reconciliation. Consider marriage counseling or mediation services."
        },
        {
          step: 4,
          title: "File Petition",
          description: "Submit the divorce petition to the appropriate court.",
          details: "File your petition at the Family Division of the High Court or Magistrate's Court depending on your circumstances."
        },
        {
          step: 5,
          title: "Serve Papers",
          description: "Ensure the other party is properly served with court documents.",
          details: "The court will arrange for your spouse to be served with the divorce papers and summons."
        },
        {
          step: 6,
          title: "Response Period",
          description: "Wait for the other party to respond to the petition.",
          details: "Your spouse has 21 days to file a response. If they don't respond, you may get a default judgment."
        },
        {
          step: 7,
          title: "Interim Orders",
          description: "Request temporary orders for custody, support, and property.",
          details: "File for interim orders to address immediate needs like child custody, maintenance, and property division."
        },
        {
          step: 8,
          title: "Discovery",
          description: "Exchange financial and other relevant information.",
          details: "Both parties must disclose all financial information, assets, and other relevant documents."
        },
        {
          step: 9,
          title: "Mediation",
          description: "Participate in court-ordered mediation to reach agreement.",
          details: "The court may order mediation to help you reach agreement on contested issues."
        },
        {
          step: 10,
          title: "Trial Preparation",
          description: "Prepare for trial if mediation fails to resolve all issues.",
          details: "If mediation doesn't resolve all issues, prepare for trial by gathering evidence and witnesses."
        },
        {
          step: 11,
          title: "Trial",
          description: "Present your case in court if necessary.",
          details: "Attend all court hearings and present your evidence and arguments to the judge."
        },
        {
          step: 12,
          title: "Judgment",
          description: "Receive and implement the court's final decision.",
          details: "Once the judge makes a decision, ensure all orders are properly implemented and followed."
        }
      ],
      resources: [
        "Marriage Act, 2014",
        "Matrimonial Property Act, 2013",
        "Children Act, 2001"
      ]
    },
    {
      title: "Small Claims Court Guide",
      description: "Recover debts and damages through small claims procedures",
      category: "Civil Procedure", 
      readTime: "8 min",
      difficulty: "Beginner",
      steps: 4,
      popular: true,
      detailedSteps: [
        {
          step: 1,
          title: "Assess Your Claim",
          description: "Determine if your claim qualifies for small claims court (under KES 1 million).",
          details: "Small claims court handles cases up to KES 1 million. Ensure your claim falls within this limit."
        },
        {
          step: 2,
          title: "Prepare Documentation",
          description: "Gather all evidence supporting your claim including contracts, receipts, and correspondence.",
          details: "Collect all relevant documents: contracts, invoices, receipts, emails, text messages, and any other evidence."
        },
        {
          step: 3,
          title: "File Your Claim",
          description: "Submit your claim form and pay the filing fee at the nearest court.",
          details: "Visit your local court and file a claim form. Pay the required filing fee (usually KES 100-500)."
        },
        {
          step: 4,
          title: "Attend Hearing",
          description: "Present your case at the scheduled hearing date.",
          details: "Attend the hearing with all your evidence. The process is informal and you can represent yourself."
        }
      ],
      resources: [
        "Small Claims Court Act, 2016",
        "Civil Procedure Act, Cap 21"
      ]
    },
    {
      title: "Consumer Rights Protection",
      description: "Protect yourself from fraudulent businesses and unfair practices",
      category: "Consumer Law",
      readTime: "14 min",
      difficulty: "Intermediate",
      steps: 7,
      popular: false,
      detailedSteps: [
        {
          step: 1,
          title: "Document the Issue",
          description: "Keep detailed records of the transaction and the problem.",
          details: "Save all receipts, contracts, warranties, and correspondence related to the transaction."
        },
        {
          step: 2,
          title: "Contact the Business",
          description: "First, try to resolve the issue directly with the business.",
          details: "Write a formal complaint letter to the business explaining the problem and what you want resolved."
        },
        {
          step: 3,
          title: "Contact Consumer Protection",
          description: "Report the issue to the Competition Authority of Kenya.",
          details: "File a complaint with the Competition Authority of Kenya through their website or office."
        },
        {
          step: 4,
          title: "Use Alternative Dispute Resolution",
          description: "Consider mediation or arbitration services.",
          details: "Many consumer disputes can be resolved through mediation services offered by consumer organizations."
        },
        {
          step: 5,
          title: "File with Small Claims Court",
          description: "If the amount is under KES 1 million, use small claims court.",
          details: "For smaller amounts, file a claim in small claims court which is faster and cheaper than regular court."
        },
        {
          step: 6,
          title: "Report to Authorities",
          description: "Report fraud or criminal activity to the police.",
          details: "If the business committed fraud or other crimes, report to the police and get a police abstract."
        },
        {
          step: 7,
          title: "Public Awareness",
          description: "Share your experience to help others avoid similar issues.",
          details: "Consider sharing your experience on consumer review platforms to warn others about problematic businesses."
        }
      ],
      resources: [
        "Consumer Protection Act, 2012",
        "Competition Act, 2010",
        "Sale of Goods Act, Cap 31"
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success/10 text-success";
      case "Intermediate": return "bg-warning/10 text-warning";  
      case "Advanced": return "bg-destructive/10 text-destructive";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  const handleStartGuide = (guide: any) => {
    setSelectedGuide(guide);
    setIsDialogOpen(true);
  };

  const handleDownloadGuide = (guide: any) => {
    // Create a simple text version of the guide for download
    const guideText = `
${guide.title}
${'='.repeat(guide.title.length)}

${guide.description}

Difficulty: ${guide.difficulty}
Estimated Time: ${guide.readTime}
Category: ${guide.category}

STEP-BY-STEP GUIDE:
${guide.detailedSteps.map((step: any) => `
${step.step}. ${step.title}
   ${step.description}
   
   Details: ${step.details}
`).join('\n')}

LEGAL RESOURCES:
${guide.resources.map((resource: string) => `- ${resource}`).join('\n')}

---
Generated by Haki Kenya Legal Aid Platform
    `;
    
    const blob = new Blob([guideText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${guide.title.replace(/\s+/g, '_')}_Guide.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="guides" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Legal Guides for Common Issues
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get step-by-step guidance on how to handle the most common legal challenges 
            faced by Kenyans every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Card 
              key={index} 
              className="hover:shadow-medium transition-smooth cursor-pointer bg-gradient-card border-0"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {guide.category}
                  </Badge>
                  {guide.popular && (
                    <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight">
                  {guide.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {guide.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {guide.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {guide.steps} steps
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getDifficultyColor(guide.difficulty)}`}
                  >
                    {guide.difficulty}
                  </Badge>
                  <div className="flex gap-2">
                    <Button 
                      variant="trust" 
                      size="sm"
                      onClick={() => handleStartGuide(guide)}
                    >
                      <BookOpen className="w-4 h-4 mr-1" />
                      Start Guide
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDownloadGuide(guide)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/guides')}
          >
            View All Legal Guides
          </Button>
        </div>

        {/* Detailed Guide Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedGuide?.title}</DialogTitle>
              <DialogDescription className="text-lg">
                {selectedGuide?.description}
              </DialogDescription>
            </DialogHeader>
            
            {selectedGuide && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedGuide.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {selectedGuide.steps} steps
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getDifficultyColor(selectedGuide.difficulty)}`}
                  >
                    {selectedGuide.difficulty}
                  </Badge>
                </div>

                <Tabs defaultValue="steps" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="steps">Step-by-Step Guide</TabsTrigger>
                    <TabsTrigger value="resources">Legal Resources</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="steps" className="space-y-4">
                    {selectedGuide.detailedSteps.map((step: any, index: number) => (
                      <Card key={index} className="border-l-4 border-l-primary">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                              {step.step}
                            </div>
                            <CardTitle className="text-lg">{step.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-3">{step.description}</p>
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="text-sm font-medium mb-2">Detailed Instructions:</p>
                            <p className="text-sm">{step.details}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="resources" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Relevant Laws and Regulations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {selectedGuide.resources.map((resource: string, index: number) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-success" />
                              <span>{resource}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <div className="flex gap-3 pt-4 border-t">
                  <Button 
                    variant="default" 
                    className="flex-1"
                    onClick={() => navigate('/dashboard')}
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Get Legal Help
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => handleDownloadGuide(selectedGuide)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Guide
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default LegalGuides;