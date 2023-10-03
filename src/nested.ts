import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    // Use the Array.filter() method to filter the questions
    const publishedQuestions = questions.filter((question) => question.published === true);
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    // Use the Array.filter() method to filter non-empty questions
    const nonEmptyQuestions = questions.filter((question) => {
        // Check if any of the properties are non-empty
        return (
            question.body.trim() !== '' ||
            question.expected.trim() !== '' ||
            question.options.length > 0
        );
    });

    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const foundQuestion = questions.find((question) => question.id === id);
    return foundQuestion || null; // Use nullish coalescing to return null if not found
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    // Use the Array.filter() method to filter out the question with the specified id
    const filteredQuestions = questions.filter((question) => question.id !== id);
    return filteredQuestions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    // Use the Array.map() method to extract the names from questions
    const names = questions.map((question) => question.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    // Initialize a variable to store the sum of points
    let totalPoints = 0;

    // Iterate through the questions and add their points to the total
    for (const question of questions) {
        totalPoints += question.points;
    }

    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    // Use the Array.filter() method to filter only the published questions
    const publishedQuestions = questions.filter((question) => question.published);

    // Initialize a variable to store the sum of points
    let totalPoints = 0;

    // Iterate through the published questions and add their points to the total
    for (const question of publishedQuestions) {
        totalPoints += question.points;
    }

    return totalPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    // Define the CSV header row
    const headers = "id,name,options,points,published";

    // Map each question to a CSV row
    const csvRows = questions.map((question) => {
        // Extract values from the question object
        const id = question.id;
        const name = question.name;
        const options = question.options.length; // Use the NUMBER of options
        const points = question.points;
        const published = question.published;

        // Combine values into a CSV row
        return `${id},${name},${options},${points},${published}`;
    });

    // Join the header row and CSV rows with line breaks
    return `${headers}\n${csvRows.join('\n')}`;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    // Map each question to an answer with the specified properties
    const answers = questions.map((question) => {
        return {
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false,
        };
    });

    return answers;
}


/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const publishedQuestions: Question[] = [];

    for (const question of questions) {
        const publishedQuestion: Question = {
            ...question,
            published: true
        };
        publishedQuestions.push(publishedQuestion);
    }

    return publishedQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
      return true;
    }
  
    const firstQuestionType = questions[0].constructor.name;
    return questions.every((question) => question.constructor.name === firstQuestionType);
  }
/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion = makeBlankQuestion(id, name, type);
    return [...questions, newQuestion];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    // Create a copy of the original questions array
    const updatedQuestions = [...questions];

    // Find the index of the question with the targetId
    const indexToUpdate = updatedQuestions.findIndex(question => question.id === targetId);

    // Check if the targetId exists in the array
    if (indexToUpdate !== -1) {
        // Create a copy of the question with the new name
        const updatedQuestion = { ...updatedQuestions[indexToUpdate], name: newName };

        // Replace the old question with the updated question
        updatedQuestions[indexToUpdate] = updatedQuestion;
    }

    return updatedQuestions;
}


/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    // Create a copy of the original questions array
    const updatedQuestions = [...questions];

    // Find the index of the question with the targetId
    const indexToUpdate = updatedQuestions.findIndex(question => question.id === targetId);

    // Check if the targetId exists in the array
    if (indexToUpdate !== -1) {
        // Create a copy of the question with the new type
        const updatedQuestion = { ...updatedQuestions[indexToUpdate], type: newQuestionType };

        // If the new type is not "multiple_choice_question," empty the options array
        if (newQuestionType !== 'multiple_choice_question') {
            updatedQuestion.options = [];
        }

        // Replace the old question with the updated question
        updatedQuestions[indexToUpdate] = updatedQuestion;
    }

    return updatedQuestions;
}


/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    // Create a copy of the original questions array
    const updatedQuestions = [...questions];

    // Find the index of the question with the targetId
    const indexToUpdate = updatedQuestions.findIndex(question => question.id === targetId);

    // Check if the targetId exists in the array
    if (indexToUpdate !== -1) {
        const questionToUpdate = updatedQuestions[indexToUpdate];
        const updatedOptions = [...questionToUpdate.options];

        // If targetOptionIndex is -1, add the new option to the end
        if (targetOptionIndex === -1) {
            updatedOptions.push(newOption);
        } else if (targetOptionIndex >= 0 && targetOptionIndex < updatedOptions.length) {
            // If targetOptionIndex is within the range of options, replace the option
            updatedOptions[targetOptionIndex] = newOption;
        }

        // Update the options of the question
        updatedQuestions[indexToUpdate] = {
            ...questionToUpdate,
            options: updatedOptions,
        };
    }

    return updatedQuestions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const duplicatedQuestions: Question[] = [];

    for (const question of questions) {
        duplicatedQuestions.push(question);

        if (question.id === targetId) {
            const duplicatedQuestion = duplicateQuestion(question, newId);
            duplicatedQuestions.push(duplicatedQuestion);
        }
    }

    return duplicatedQuestions;
}

