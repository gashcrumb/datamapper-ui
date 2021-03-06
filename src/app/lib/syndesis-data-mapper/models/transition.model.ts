/*
	Copyright (C) 2017 Red Hat, Inc.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	        http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

export enum TransitionMode { MAP, SEPARATE, ENUM }    
export enum TransitionDelimiter { SPACE, COMMA }    

export class TransitionModel {
	public mode: TransitionMode = TransitionMode.MAP;
	public delimiter: TransitionDelimiter = TransitionDelimiter.SPACE;
	public lookupTableName: string = null;

	public getPrettyName() {
		if (this.mode == TransitionMode.SEPARATE) {
			return "Separate (" + ((this.delimiter == TransitionDelimiter.SPACE) ? "Space)" : "Comma)");
		} else if (this.mode == TransitionMode.ENUM) {
			return "Enum (table: " + this.lookupTableName + ")";
		}
		return "Map";
	}

	public isSeparateMode(): boolean {
		return this.mode == TransitionMode.SEPARATE;
	}

	public toJSON(): any {
		return {
			"mode": this.mode,
			"delimiter": this.delimiter,
			"lookupTableName": this.lookupTableName
		};
	}

    public fromJSON(json: any): void {
        this.mode = json.mode;
        this.delimiter = json.delimiter;
        this.lookupTableName = json.lookupTableName;
    }	
}