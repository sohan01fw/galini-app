"use server";

import { CheckUser } from "./User.action";
import { prisma } from "../prisma";
import { fileData, funcResponse, GuardrailsType } from "@/types/global";
import { utapi } from "../server/uploadthings";

export async function CheckGuardrails({
  name,
}: {
  name: string;
}): Promise<funcResponse> {
  try {
    const checkguardrails = await prisma.guardrails.findUnique({
      where: {
        name: name,
      },
    });
    if (!checkguardrails) {
      return {
        error: true,
        data: null,
        message: "guardrail not found",
        status: 404,
      };
    }
    return {
      data: checkguardrails,
      message: "successfully check the guardrails",
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      data: null,
      message: "Something went wrong while searching guardrails",
      status: 500,
    };
  }
}
export async function CreateGuardrailsRule(
  GuardrailsData: GuardrailsType,
  userEmail: string,
  userId: string,
): Promise<funcResponse> {
  try {
    const checkUser = await CheckUser(userEmail);

    if ("error" in checkUser) {
      return {
        error: checkUser.error,
        data: checkUser.data,
        status: checkUser.status,
        message: checkUser.message,
      };
    }
    const file: fileData = GuardrailsData.pdfImage;
    const fileData = {
      lastModified: file.lastModified,
      name: file.name,
      size: file.size,
      type: file.type,
    };
    if (!GuardrailsData.pdfImage) {
      return {
        data: null,
        message: "pdfimage not found",
        status: 404,
        error: true,
      };
    }
    //creating blob object
    const blobFile = new Blob([GuardrailsData.pdfImage], {
      type: fileData.type,
    });
    // Convert fileData to a `File` object
    const fileResponseData = new File([blobFile], fileData.name, {
      type: fileData.type,
      lastModified: fileData.lastModified,
    });
    //upload pdf file
    const uploadfile = await utapi.uploadFiles(fileResponseData);
    const guardrails = await prisma.guardrails.create({
      data: {
        name: GuardrailsData.name.toLowerCase(),
        rules: GuardrailsData.rules,
        pdfImage: uploadfile.data?.appUrl,
        compliancetype: GuardrailsData.compliancetype,
        prioritylevel: GuardrailsData.prioritylevel,
        rulestype: GuardrailsData.rulestype,
        userId,
      },
    });

    return {
      data: guardrails,
      message: "successfully created guardrails",
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      data: null,
      message: "Something went Error while posting jobs application",
      status: 500,
    };
  }
}
