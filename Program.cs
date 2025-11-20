using Google.GenAI;
using Octokit;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;

namespace AI_doc_generator
{
    internal class Program
    {
        static async Task Main(string[] args)
        {
            //GitHub repository details
            string owner = "lskld"; // Replace with repository owner
            string repoName = "Lab7AIAssistedApp"; // Replace with repository name
            string path = "README.md"; // Replace with path (empty string for root)

            string githubToken = Environment.GetEnvironmentVariable("GITHUB_TOKEN")
                ?? throw new InvalidOperationException("GITHUB_TOKEN environment variable not set");

            var githubClient = new GitHubClient(new ProductHeaderValue("AI-Doc-Generator"))
            {
                Credentials = new Credentials(githubToken)
            };

            var contents = await githubClient.Repository.Content.GetAllContents(owner, repoName, path);
            var allCode = string.Join("\n\n", contents.Where(
                c => c.Type == ContentType.File).Select(
                c => $"// {c.Path}\n{c.Content}"));
            var promptSRS = $"Here is my code: {allCode}. \n\n Please write a 'Software Requirements Specification (SRS)' based on this code using the MIL-STD-498 standard.";
            var promptSTD = $"Here is my code: {allCode}. \n\n Please write a 'Software Test Description (STD)' based on this code using the MIL-STD-498 standard.";
            var promptSTR = $"Here is my code: {allCode}. \n\n Please write a 'Software Test Report (STR)' based on this code using the MIL-STD-498 standard.";
            var promptSVD = $"Here is my code: {allCode}. \n\n Please write a 'Software Version Description (SVD)' based on this code using the MIL-STD-498 standard.";

            var chosenPrompt = promptSRS; //Changed to integration with frontend later

            //Gemini Developer API
            string geminiApiKey = Environment.GetEnvironmentVariable("GEMINI_API_KEY")
                ?? throw new InvalidOperationException("GEMINI_API_KEY environment variable not set");
            var googleAiClient = new Client(apiKey: geminiApiKey);

            var response = await googleAiClient.Models.GenerateContentAsync(
              model: "gemini-2.5-flash", contents: chosenPrompt
            );
            var outputMessage = response.Candidates[0].Content.Parts[0].Text;

            //Generate PDF
            QuestPDF.Settings.License = LicenseType.Community;
            Document.Create(container =>
            {
                container.Page(page =>
                {
                    page.Size(PageSizes.A4);
                    page.Margin(2, Unit.Centimetre);
                    page.Content().Text(outputMessage).FontSize(11);
                });
            }).GeneratePdf("SRS_Document.pdf");

            Console.WriteLine("\nPDF saved as SRS_Document.pdf");
        }
    }
}

