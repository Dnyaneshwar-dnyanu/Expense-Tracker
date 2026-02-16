
function FinalSettlement(props) {
    let giveExpenses = props.giveExpenses;
    let getExpenses = props.getExpenses;
    let members = props.members;

    const formatAmount = (amount) => {
        // round to 2 decimals cleanly
        return `₹${Number(amount).toFixed(2)}`;
    };

    return (
        < div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 mt-6 p-6" >
            <h2 className="text-xl font-bold text-gray-900">
                Final Settlements 🧾
            </h2>
            <div className="mt-4 space-y-3">
                {members.map((member) => {
                    const give = giveExpenses[member.id]?.totalExpense || 0;
                    const get = getExpenses[member.id]?.totalExpense || 0;

                    const net = get - give;

                    if (net === 0) return null;

                    if (net > 0) {
                        return (
                            <div
                                key={member.id}
                                className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold"
                            >
                                You get {formatAmount(net)} from {member.name}
                            </div>
                        );
                    }

                    return (
                        <div
                            key={member.id}
                            className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-700 font-semibold"
                        >
                            You should give {formatAmount(Math.abs(net))} to {member.name}
                        </div>
                    );
                })}
            </div>
        </div >
    )
}

export default FinalSettlement