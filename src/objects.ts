import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    return {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    // Trim whitespace from the answer and question's expected answer
    const trimmedAnswer = answer.trim();
    const trimmedExpected = question.expected.trim();

    // Convert both the answer and expected answer to lowercase for case-insensitive comparison
    const lowercaseAnswer = trimmedAnswer.toLowerCase();
    const lowercaseExpected = trimmedExpected.toLowerCase();

    // Check if the lowercase trimmed answer matches the lowercase trimmed expected answer
    return lowercaseAnswer === lowercaseExpected;
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question") {
        return true;
    } else if (question.type === "multiple_choice_question") {
        const options = question.options || [];
        return options.includes(answer);
    }

    return false;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
export function toShortForm(question: Question): string {
    // Get the first 10 characters of the name
    const shortenedName =
        question.name.length <= 10 ? question.name : question.name.slice(0, 10);

    // Combine the id and shortened name with ": "
    return `${question.id}: ${shortenedName}`;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    let markdown = `# ${question.name}\n${question.body}\n`;

    if (question.type === "multiple_choice_question") {
        for (const option of question.options) {
            markdown += `- ${option}\n`;
        }
    }

    console.log("Generated Markdown:", markdown); // Add this debugging statement

    return markdown.trim();
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    // Create a new object with the updated name and copy other properties
    const updatedQuestion: Question = {
        ...question, // Copy existing properties
        name: newName // Update the name property
    };

    return updatedQuestion;
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    // Create a new object by copying all properties from the original question
    const updatedQuestion: Question = {
        ...question
    };

    // Invert the `published` field
    updatedQuestion.published = !question.published;

    return updatedQuestion;
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    // Copy over the properties from the old question
    const newQuestion: Question = {
        id: id,
        name: `Copy of ${oldQuestion.name}`,
        body: oldQuestion.body,
        type: oldQuestion.type,
        options: oldQuestion.options,
        expected: oldQuestion.expected,
        points: oldQuestion.points,
        published: false // Reset the published field to false
    };

    return newQuestion;
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    // Create a new array with a copy of the existing options
    const newOptions = [...question.options];

    // Add the newOption to the new array
    newOptions.push(newOption);

    // Create a new question object with the updated options
    const updatedQuestion: Question = {
        ...question, // Copy other properties from the original question
        options: newOptions // Update the options field
    };

    return updatedQuestion;
}
/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    const mergedQuestion: Question = {
        id: id,
        name: name,
        body: contentQuestion.body,
        type: contentQuestion.type,
        options: contentQuestion.options,
        expected: contentQuestion.expected,
        points: points,
        published: false
    };

    return mergedQuestion;
}
